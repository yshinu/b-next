import z from "zod";

export const postFormSchema = z
  .object({
    title: z.string().min(2, {
      message: "标题至少需要 2 个字符。",
    }),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "URL 友好格式只能包含小写字母、数字和连字符 (-)。",
    }),
    excerpt: z
      .string()
      .max(200, {
        message: "摘要不能超过 200 个字符。",
      })
      .optional(),
    coverImage: z.string().url({
      message: "请输入有效的 URL。",
    }), // 1. 在状态枚举中添加 "SCHEDULED"
    status: z.enum(["DRAFT", "PUBLISHED", "SCHEDULED"], {
      required_error: "你必须选择一个状态。",
    }),
    visibility: z.enum(["PUBLIC", "PASSWORD"], {
      required_error: "你必须选择一个可见性选项。",
    }),
    password: z.string().optional(), // 2. 使发布日期在基础层面上是可选的
    publishedAt: z.date().optional(),
  })
  // 校验密码
  .refine(
    (data) => {
      if (data.visibility === "PASSWORD") {
        return data.password && data.password.length >= 6;
      }
      return true;
    },
    {
      message: "密码保护的文章必须设置一个至少 6 位数的密码。",
      path: ["password"],
    }
  )
  // 3. 添加新的 refine 逻辑来校验发布日期
  .refine(
    (data) => {
      if (data.status === "SCHEDULED") {
        // 如果状态是“预定发布”，则 `published_at` 必须是一个日期
        return !!data.publishedAt;
      }
      return true; // 对于其他状态，此校验通过
    },
    {
      message: "预定发布的文章必须选择一个发布时间。",
      path: ["publishedAt"], // 当校验失败时，错误消息将显示在 published_at 字段下
    }
  );

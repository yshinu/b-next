import z from "zod";

export const postFormSchema = z.object({
  title: z.string().min(2, {
    message: "标题至少需要 2 个字符。",
  }),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "URL 友好格式只能包含小写字母、数字和连字符 (-)。",
  }),
  excerpt: z.string().max(200, {
    message: "摘要不能超过 200 个字符。",
  }).optional(),
  cover_image: z.string().url({
    message: "请输入有效的 URL。",
  }),
  status: z.enum(["DRAFT", "PUBLISHED"], {
    required_error: "你必须选择一个状态。",
  }),
  visibility: z.enum(["PUBLIC","PASSWORD"], {
    required_error: "你必须选择一个可见性选项。",
  }),
  password: z.string().optional(),
  published_at: z.date({
    required_error: "发布日期是必填项。",
  }),
}).refine(data => {
  if (data.visibility === "PASSWORD") {
    return data.password && data.password.length >= 6;
  }
  return true;
}, {
  message: "密码保护的文章必须设置一个至少 6 位数的密码。",
  path: ["password"], // 指定错误消息关联到哪个字段
});
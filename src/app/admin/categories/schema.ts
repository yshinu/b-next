import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(2, { message: "分类名称至少需要2个字符。" }),
  slug: z.string()
    .min(2, { message: "Slug 至少需要2个字符。" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug 只能包含小写字母、数字和连字符(-)，且不能以连字符开头或结尾。",
    }),
  description: z.string().optional(),
  order: z.coerce.number().int({ message: "排序值必须是整数。" }).optional(),
});

export type CategoryFormData = z.infer<typeof categorySchema>;
// 2. 扩展基础 Schema，定义从后端获取的完整 Category 对象的 Schema
export const fullCategorySchema = categorySchema.extend({
  id: z.string(), // 从数据库获取的数据一定有 id
  postCount: z.number().int(), // 表格中需要展示博文数量
});


export type Category = z.infer<typeof fullCategorySchema>;
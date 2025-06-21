"use server";

import { z } from "zod";
import { revalidateTag } from "next/cache";
import prisma from "@/lib/prisma"; // 假设你的 Prisma Client 在这里
import { categorySchema, fullCategorySchema } from "./schema";

// 定义一个统一的返回类型，方便客户端处理
export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
};

/**
 * 新增一个分类
 * @param prevState - useFormState hook 的上一个状态
 * @param formData - 从表单提交的数据
 */
export async function createCategoryAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. 使用 Zod 解析和校验表单数据
  const validatedFields = categorySchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    order: Number(formData.get("order") || 0),
  });

  // 2. 如果校验失败，返回错误信息
  if (!validatedFields.success) {
    return {
      success: false,
      message: "表单校验失败，请检查输入。",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 3. 执行数据库创建操作
  try {
    await prisma.category.create({
      data: validatedFields.data,
    });

    // 4. 清除 'categories' 数据的缓存
    revalidateTag("categories");

    return { success: true, message: "分类创建成功！" };
  } catch (error) {
    // 处理唯一性约束等数据库错误
    return {
      success: false,
      message: "创建失败，分类名称或 Slug 可能已存在。",
    };
  }
}

/**
 * 更新一个分类
 * @param id - 要更新的分类 ID
 * @param prevState - useFormState hook 的上一个状态
 * @param formData - 从表单提交的数据
 */
export async function updateCategoryAction(
  id: string,
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. 校验数据
  const validatedFields = categorySchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    order: Number(formData.get("order") || 0),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "表单校验失败，请检查输入。",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. 执行数据库更新操作
  try {
    await prisma.category.update({
      where: { id },
      data: validatedFields.data,
    });

    // 3. 清除缓存
    revalidateTag("categories");

    return { success: true, message: "分类更新成功！" };
  } catch (error) {
    return {
      success: false,
      message: "更新失败，分类名称或 Slug 可能与其他分类冲突。",
    };
  }
}

/**
 * 删除一个分类
 * @param id - 要删除的分类 ID
 */
export async function deleteCategoryAction(id: string): Promise<FormState> {
  // 注意：在实际项目中，你可能需要检查这个分类下是否有关联的文章
  // 如果有关联文章，根据业务逻辑选择是禁止删除，还是将文章移动到默认分类
  try {
    await prisma.category.delete({
      where: { id },
    });

    revalidateTag("categories");

    return { success: true, message: "分类删除成功！" };
  } catch (error) {
    return { success: false, message: "删除失败，请稍后重试。" };
  }
}

/**
 * [查询] 获取单个分类信息（用于编辑表单回填）
 * @param id - 分类 ID
 */
export async function getCategoryById(id: string) {
  try {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    return category;
  } catch (error) {
    return null;
  }
}

/**
 * [查询] 获取分页后的分类列表
 * @param nameFilter - 按名称筛选的字符串
 * @param page - 当前页码
 */
export async function fetchPaginatedCategories(
  nameFilter?: string,
  page: number = 1,
  pageSize:number=5
) {
  try {
    const whereClause = nameFilter
      ? { name: { contains: nameFilter, mode: "insensitive" as const } }
      : {};

    // 1. 同时执行两个数据库查询：获取总数和获取当页数据
    const [totalCount, categoriesWithCount] = await prisma.$transaction([
      prisma.category.count({ where: whereClause }),
      prisma.category.findMany({
        where: whereClause,
        orderBy: {
          order: "asc",
        },
        take: pageSize,
        skip: (page - 1) * pageSize,
        include: {
          _count: {
            select: { posts: true }, 
          },
        },
      }),
    ]);
    
 
    const categories = categoriesWithCount.map((category) => {
        const addPostCount = {
        ...category,
        postCount: category._count.posts,
      };
      
      return fullCategorySchema.parse(addPostCount);
    });



    const totalPages = Math.ceil(totalCount / pageSize);

    return { categories, totalPages };
  } catch (error) {
    console.error("Database Error:", error);
    return { categories: [], totalPages: 0 };
  }
}
import prisma from "@/lib/prisma";
import { CategoryList } from "./_components/category-list";
import { fullCategorySchema } from "./schema";
export default async function CategoryManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; page?: string }>;
}) {
  const searchParamsThen = await searchParams;
  // 1. 从 URL 查询参数中获取筛选条件和页码
  const nameFilter = searchParamsThen.name;
  const currentPage = Number(searchParamsThen.page) || 1; // 将 page 转为数字，默认为 1
  async function fetchPaginatedCategories(
    nameFilter?: string,
    page: number = 1,
    pageSize: number = 5
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
  const { categories, totalPages } = await fetchPaginatedCategories(
    nameFilter,
    currentPage,
    5
  );

  // 3. 将获取的数据和状态信息作为 props 传递给客户端组件
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <CategoryList
        initialCategories={categories}
        totalPages={totalPages}
        currentPage={currentPage}
        nameFilter={nameFilter}
      />
    </div>
  );
}

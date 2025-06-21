import { CategoryList } from "./_components/category-list";
import { fetchPaginatedCategories } from "./action";
import { Category } from "./schema";
export default async function CategoryManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; page?: string }>;
}) {
const searchParamsThen = await searchParams;
  // 1. 从 URL 查询参数中获取筛选条件和页码
  const nameFilter = searchParamsThen.name;
  const currentPage = Number(searchParamsThen.page) || 1; // 将 page 转为数字，默认为 1

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
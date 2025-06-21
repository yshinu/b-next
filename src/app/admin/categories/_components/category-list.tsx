"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
// ... 其他 import 保持不变
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  PlusCircle,
  Search,
  Trash2,
  Pencil,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { CategoryFormDialog } from "./category-form-dialog";
import { Category } from "../schema";
import { ConfirmationAlertDialog } from "@/components/confirmation-alert-dialog";
import { deleteCategoryAction } from "../action";

// 更新组件接收的 Props
interface CategoryListProps {
  initialCategories: Category[];
  totalPages: number;
  currentPage: number;
  nameFilter?: string;
}

export function CategoryList({
  initialCategories,
  totalPages,
  currentPage,
}: CategoryListProps) { // 注意：nameFilter 不再需要作为 prop 传入
  const router = useRouter(); // 2. 初始化 router
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 直接从 searchParams hook 获取最新的 nameFilter
  const nameFilter = searchParams.get("name") || "";
  
  // ... 其他 state 保持不变
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(
    null
  );

  // 创建一个函数来生成带查询参数的 URL
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleAddNew = () => {
    setEditingCategory(null);
    setIsFormDialogOpen(true);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setIsFormDialogOpen(true);
  };

  const handleDeleteClick = (category: Category) => {
    setCategoryToDelete(category);
    setIsDeleteDialogOpen(true);
  };

    const handleDeleteConfirm = async () => {
    if (!categoryToDelete) return;

    const result = await deleteCategoryAction(categoryToDelete.id);

    if (result.success) {
      // 可以在这里加一个 toast 通知
      console.log(result.message);
    } else {
      // 处理删除失败的情况
      console.error(result.message);
    }
    
    setIsDeleteDialogOpen(false);
    setCategoryToDelete(null);
    router.refresh(); 
  };
   const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止表单默认的整页提交行为
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    
    const params = new URLSearchParams(searchParams);
    if (name) {
      params.set("name", name);
      params.set("page", "1"); // 每次新的搜索都应该回到第一页
    } else {
      params.delete("name"); // 如果输入为空，则移除 name 参数
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>分类筛选</CardTitle>
          <CardDescription>输入分类名称进行精确搜索。</CardDescription>
        </CardHeader>
        <CardContent>
         <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-end gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="text-sm font-medium">
                分类名称
              </label>
              <Input
                id="name"
                name="name"
                placeholder="例如：前端技术"
                className="mt-1"
                defaultValue={nameFilter} // 使用从 hook 获取的 nameFilter
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" />
                查询
              </Button>
              <Button asChild variant="outline">
                <a href={pathname}>重置</a>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>分类列表</CardTitle>
            <CardDescription>
              这里是所有的文章分类，你可以进行管理。
            </CardDescription>
          </div>
          <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            新增分类
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>名称</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead className="hidden md:table-cell">描述</TableHead>
                <TableHead className="text-center">博文数量</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {initialCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>{category.slug}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {category.description || "暂无描述"}
                  </TableCell>
                  <TableCell className="text-center">
                    {category.postCount}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">打开操作菜单</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onSelect={() => handleEdit(category)}>
                          <Pencil className="mr-2 h-4 w-4" />
                          编辑
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => handleDeleteClick(category)}
                          className="text-red-600 focus:text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          删除
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {/* 动态分页 */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(currentPage - 1)}
              className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={createPageURL(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href={createPageURL(currentPage + 1)}
              className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
        <CategoryFormDialog
        isOpen={isFormDialogOpen}
        onOpenChange={setIsFormDialogOpen}
        category={editingCategory}
        onSuccess={() => {
          router.refresh();
        }}
      />
       <ConfirmationAlertDialog
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        title={`确定要删除分类 "${categoryToDelete?.name}" 吗？`}
        description="这个操作无法撤销。这将会永久删除该分类及其下的文章关联。"
      />
    </>
  );
}
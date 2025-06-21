"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // 建议为 description 添加 Textarea 组件
import { useActionState, useEffect } from "react";
import { CategoryFormData, categorySchema } from "../schema";
import { createCategoryAction, updateCategoryAction } from "../action";

// 定义组件的 Props
interface CategoryFormDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  // 如果传入了 category，则为编辑模式；否则为新增模式
  category?: (CategoryFormData & { id?: string }) | null;
  onSuccess: () => void;
}

export function CategoryFormDialog({
  isOpen,
  onOpenChange,
  category,
  onSuccess,
}: CategoryFormDialogProps) {
  const isEditMode = !!category;

  const form = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      order: 0,
    },
  });

  // 当 category 变化时（比如从新增变为编辑），重置表单的值
  useEffect(() => {
    if (isEditMode) {
      form.reset({
        name: category.name,
        slug: category.slug,
        description: category.description || "",
        order: category.order || 0,
      });
    } else {
      form.reset({
        name: "",
        slug: "",
        description: "",
        order: 0,
      });
    }
  }, [category, form, isEditMode]);

  const action = isEditMode
    ? updateCategoryAction.bind(null, category.id!) // 预绑定 ID
    : createCategoryAction;

  const [formState, formAction, pending] = useActionState(action, {
    success: false,
    message: "",
  });

  // 提交成功后关闭对话框
  useEffect(() => {
    if (formState.success) {
      onOpenChange(false);
    }
  }, [formState, onOpenChange]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "编辑分类" : "新增分类"}</DialogTitle>
          <DialogDescription>
            {isEditMode ? "修改分类信息后，点击保存。" : "填写新的分类信息。"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form action={formAction} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>名称</FormLabel>
                  <FormControl>
                    <Input placeholder="例如：前端技术" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="例如：frontend" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>描述 (可选)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="介绍这个分类" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="order"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>排序 (可选)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="数字越小，越靠前"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             {!formState.success && formState.message && (
            <p className="text-sm text-red-500">{formState.message}</p>
          )}
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                取消
              </Button>
              <Button type="submit" disabled={pending}>
                {pending ? "保存中..." : "保存"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

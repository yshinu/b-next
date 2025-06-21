"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ConfirmationAlertDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen:boolean) => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export function ConfirmationAlertDialog({
  isOpen,
  onOpenChange,
  onConfirm,
  title,
  description,
}: ConfirmationAlertDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* 取消按钮，点击后会调用 onOpenChange(false) */}
          <AlertDialogCancel>取消</AlertDialogCancel>
          {/* 确认按钮，点击后会调用我们传入的 onConfirm 函数 */}
          <AlertDialogAction onClick={onConfirm}>确定</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
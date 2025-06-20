import { Skeleton } from "@/components/ui/skeleton";

// 分类内容骨架屏
function CategoriesContentSkeleton() {
  return (
    <div className="space-y-6">
      {/* 搜索栏骨架 */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
        <Skeleton className="h-10 w-full max-w-md" />
        <div className="flex gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
      
      {/* 分类卡片骨架 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-card/60 backdrop-blur-xl border-border/50 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <Skeleton className="w-12 h-12 rounded-lg" />
              <Skeleton className="h-6 w-12" />
            </div>
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 侧边栏骨架屏
function SidebarSkeleton() {
  return (
    <div className="space-y-8">
      {/* 作者信息骨架 */}
      <div className="bg-card/60 backdrop-blur-xl border-border/50 rounded-lg p-6 text-center">
        <Skeleton className="w-20 h-20 rounded-full mx-auto mb-4" />
        <Skeleton className="h-5 w-24 mx-auto mb-2" />
        <Skeleton className="h-4 w-32 mx-auto mb-3" />
        <Skeleton className="h-3 w-40 mx-auto mb-4" />
        <div className="flex justify-center space-x-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </div>

      {/* 统计信息骨架 */}
      <div className="bg-card/60 backdrop-blur-xl border-border/50 rounded-lg p-6">
        <Skeleton className="h-6 w-24 mb-4" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { CategoriesContentSkeleton, SidebarSkeleton}
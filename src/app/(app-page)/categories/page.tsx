import { Suspense } from 'react';
import { CategoriesContentSkeleton, SidebarSkeleton } from './_components/skeleton';
import CategoriesContent from './_components/categories-content';
import CategoriesSidebar from './_components/categories-sidebar';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 页面头部 - 立即显示 */}
      <div className="bg-gradient-to-b from-muted/50 to-background border-b border-border/50">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              文章
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                分类
              </span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              按主题探索文章内容，发现感兴趣的话题。
            </p>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 分类内容 - 流式加载 */}
          <div className="lg:col-span-2">
            <Suspense fallback={<CategoriesContentSkeleton />}>
              <CategoriesContent />
            </Suspense>
          </div>

          {/* 侧边栏 - 流式加载 */}
          <aside className="lg:col-span-1 space-y-8">
            <Suspense fallback={<SidebarSkeleton />}>
              <CategoriesSidebar />
            </Suspense>
          </aside>
        </div>
      </main>
    </div>
  );
}
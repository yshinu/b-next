import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Bookmark,
  Share2,
} from 'lucide-react';
import PostPreview from './_components/post-preview';

export default function PostPage() {


  return (
    <div className="bg-gradient-to-br from-background to-muted/20 min-h-screen">
      {/* 导航栏 */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="/">
                <ArrowLeft className="h-5 w-5" />
              </a>
            </Button>
            <h1 className="text-xl font-serif font-semibold">思哲笔记</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* 主体内容 */}
      <PostPreview/>
    </div>
  );
}
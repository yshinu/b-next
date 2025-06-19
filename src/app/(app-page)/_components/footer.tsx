import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { Twitter, Github, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">思</span>
              </div>
              <span className="text-2xl font-serif font-bold text-foreground">
                静思录
              </span>
            </a>
            <p className="mb-6 max-w-md text-sm">
              一个记录思考与感悟的个人空间，探索科技与人文的边界，在平凡中寻找不凡的意义。
            </p>
            <div className="flex space-x-2">
              <Button asChild variant="ghost" size="icon">
                <a href="#">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-base mb-4 font-serif">
              栏目
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-foreground">
                  生活哲学
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  科技人文
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  城市观察
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  读书笔记
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  旅行随笔
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-base mb-4 font-serif">
              链接
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-foreground">
                  关于我
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  文章归档
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  精选合集
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  友情链接
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  联系我
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 静思录 | 在思考与表达之间</p>
          <p className="mt-2">让文字成为心灵的栖息地</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

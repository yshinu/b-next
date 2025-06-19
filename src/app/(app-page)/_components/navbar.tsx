import { Themetoggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";

function Navbar() {
    return (       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">思</span>
              </div>
              <span className="text-xl font-serif font-bold">静思录</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">首页</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">分类</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">归档</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">关于</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">书单</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索文章..." className="pl-9 w-48" />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Themetoggle/>
          </div>
        </div>
      </header> );
}

export default Navbar;
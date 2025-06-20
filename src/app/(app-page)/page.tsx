
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Github,
  Heart,
  Mail,
  MessageSquare,
  Twitter, // 用于移动端菜单按钮
} from 'lucide-react';
import Sub from './_components/sub';
import Link from 'next/link';

export default function Home() {

  return (
    <div>
      {/* 主体内容 */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 文章列表 */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                最新
                {/* 文本渐变效果，使用您主题中的 primary 和 secondary 颜色 */}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  文章
                </span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
                探索科技、人文与生活的交汇点，记录思想旅程中的点滴感悟，在平凡中寻找不凡的意义。
              </p>
            </div>

            <div className="space-y-12">
              {/* 文章卡片 1 */}
              <Card className="bg-card/60 backdrop-blur-xl border-border/50 shadow-sm transition-shadow hover:shadow-md">
                <CardContent>
                  <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-4 gap-x-4 gap-y-2">
                    <span className="bg-primary text-secondary px-3 py-1 rounded-full font-medium">
                      科技人文
                    </span>
                    <span className="flex items-center">
                      <CalendarDays className="mr-1.5 h-4 w-4" />
                      2023年9月5日
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1.5 h-4 w-4" />
                      12分钟阅读
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 font-serif text-card-foreground">
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      数字时代的诗意栖居
                    </a>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    在算法统治的世界里，如何保持内心的诗意与人文关怀？探索技术与精神生活的平衡之道。在信息爆炸的时代，我们更需要内心的宁静与深度思考的能力...
                  </p>
                  <div className="flex justify-between items-center mt-6">
                    <Button
                      asChild
                      variant="link"
                      className="px-0 text-primary"
                    >
                      <a href="#" className="group">
                        阅读全文
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-primary"
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span className="text-sm">24</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-rose-500"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 文章卡片 2 */}
              <Card className="bg-card/60 backdrop-blur-xl border-border/50 shadow-sm transition-shadow hover:shadow-md">
                <CardContent>
                  <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-4 gap-x-4 gap-y-2">
                    <span className="bg-primary text-secondary px-3 py-1 rounded-full font-medium">
                      生活哲学
                    </span>
                    <span className="flex items-center">
                      <CalendarDays className="mr-1.5 h-4 w-4" />
                      2023年8月28日
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1.5 h-4 w-4" />
                      8分钟阅读
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 font-serif text-card-foreground">
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      平凡中的不平凡
                    </a>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    在日复一日的平淡生活中，如何发现那些微小而珍贵的闪光点？重新定义"非凡"的意义。真正的智慧往往隐藏在最普通的日常中，等待我们去发现...
                  </p>
                  <div className="flex justify-between items-center mt-6">
                    <Button
                      asChild
                      variant="link"
                      className="px-0 text-primary"
                    >
                      < Link href="/blog/1" className="group">
                        阅读全文
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-primary"
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span className="text-sm">18</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-rose-500"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 分页 */}
            <div className="mt-16 flex justify-center items-center space-x-2">
              <Button variant="outline" disabled>
                <ChevronLeft className="h-4 w-4 mr-1" /> 上一页
              </Button>
              <Button variant="default" size="icon">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <span className="text-muted-foreground">...</span>
              <Button variant="outline" size="icon">
                8
              </Button>
              <Button variant="outline">
                下一页 <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* 侧边栏 */}
          <aside className="lg:col-span-1 space-y-10">
            {/* 作者信息 */}
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 text-center">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-background">
                  <AvatarImage
                    src="https://i.pravatar.cc/150?u=author"
                    alt="作者林思哲"
                  />
                  <AvatarFallback>林</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold font-serif">林思哲</h3>
                <p className="text-muted-foreground mb-4">思考者 & 记录者</p>
                <p className="text-sm text-muted-foreground">
                  在科技与人文的交叉路口寻找灵感，记录思想旅程中的点滴感悟。
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <Button asChild variant="ghost" size="icon">
                    <a href="#">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <a href="#">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <a href="#">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 文章分类 */}
            <Card className="bg-card/60 backdrop-blur-xl border-border/50">
              <CardHeader>
                <CardTitle className="font-serif">文章分类</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  {[
                    { name: '生活哲学', count: 12 },
                    { name: '科技人文', count: 18 },
                    { name: '城市观察', count: 9 },
                    { name: '读书笔记', count: 15 },
                    { name: '旅行随笔', count: 7 },
                  ].map((cat, index, arr) => (
                    <li key={cat.name}>
                      <a
                        href="#"
                        className="flex justify-between items-center py-2.5 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>{cat.name}</span>
                        <span className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs font-medium">
                          {cat.count}
                        </span>
                      </a>
                      {index < arr.length - 1 && <Separator />}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 热门文章 */}
            <Card className="bg-card/60 backdrop-blur-xl border-border/50">
              <CardHeader>
                <CardTitle className="font-serif">热门文章</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  {
                    title: '在不确定中寻找确定',
                    date: '8月15日',
                    views: 142,
                    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop',
                  },
                  {
                    title: '慢生活的艺术',
                    date: '8月2日',
                    views: 126,
                    img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=100&h=100&fit=crop',
                  },
                  {
                    title: '数字极简主义实践指南',
                    date: '7月28日',
                    views: 98,
                    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=100&h=100&fit=crop',
                  },
                ].map((post) => (
                  <a
                    key={post.title}
                    href="#"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-card-foreground group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {post.date} • {post.views}次阅读
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Sub/>

    </div>
  );
}

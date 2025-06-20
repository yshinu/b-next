import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Separator } from '@radix-ui/react-separator';
import { Twitter, Github, Mail, TrendingUp } from 'lucide-react';
import getSidebarData from '@/app/(app-page)/data/getSidebarData';

export default async function CategoriesSidebar() {
  const { author, stats, recentPosts } = await getSidebarData();

  return (
    <>
      {/* 作者信息 */}
      <Card className="bg-card/60 backdrop-blur-xl border-border/50 text-center">
        <CardContent className="p-6">
          <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-background">
            <AvatarImage src={author.avatar} alt={`作者${author.name}`} />
            <AvatarFallback>林</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-bold font-serif">{author.name}</h3>
          <p className="text-muted-foreground text-sm mb-3">{author.title}</p>
          <p className="text-xs text-muted-foreground mb-4">{author.bio}</p>
          <div className="flex justify-center space-x-2">
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

      {/* 分类统计 */}
      <Card className="bg-card/60 backdrop-blur-xl border-border/50">
        <CardHeader>
          <CardTitle className="font-serif flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            分类统计
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">总分类数</span>
              <Badge variant="secondary">{stats.totalCategories}</Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">总文章数</span>
              <Badge variant="secondary">{stats.totalPosts}</Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">最活跃分类</span>
              <Badge className="text-xs">{stats.mostActiveCategory}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 最新文章 */}
      <Card className="bg-card/60 backdrop-blur-xl border-border/50">
        <CardHeader>
          <CardTitle className="font-serif">最新文章</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h4 className="font-medium text-sm text-card-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {post.date} • {post.readTime}
              </p>
            </a>
          ))}
        </CardContent>
      </Card>
    </>
  );
}

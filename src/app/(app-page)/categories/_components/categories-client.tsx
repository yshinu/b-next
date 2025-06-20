'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Search,
  BookOpen,
  Hash,
  Grid3X3,
  List,
  Eye
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  views: number;
  slug: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  color: string;
  posts: Post[];
}

interface CategoriesClientProps {
  categories: Category[];
}

export default function CategoriesClient({ categories }: CategoriesClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* 搜索和过滤 */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索分类..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* 分类列表 */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <Card 
              key={category.id}
              className="bg-card/60 backdrop-blur-xl border-border/50 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer group"
              onClick={() => setSelectedCategory(category)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Hash className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} 篇
                  </Badge>
                </div>
                <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
                    最近更新
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCategories.map((category) => (
            <Card 
              key={category.id}
              className="bg-card/60 backdrop-blur-xl border-border/50 shadow-sm transition-all hover:shadow-md cursor-pointer group"
              onClick={() => setSelectedCategory(category)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Hash className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs ml-2">
                        {category.count} 篇
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* 选中分类的文章列表 */}
      {selectedCategory && (
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-12 h-12 ${selectedCategory.color} rounded-lg flex items-center justify-center`}>
              <Hash className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-serif">{selectedCategory.name}</h2>
              <p className="text-muted-foreground">{selectedCategory.posts.length} 篇文章</p>
            </div>
          </div>

          <div className="space-y-6">
            {selectedCategory.posts.map((post) => (
              <Card key={post.id} className="bg-card/60 backdrop-blur-xl border-border/50 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-3 gap-x-4 gap-y-2">
                    <span className="flex items-center">
                      <CalendarDays className="mr-1.5 h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1.5 h-4 w-4" />
                      {post.readTime}阅读
                    </span>
                    <span className="flex items-center">
                      <Eye className="mr-1.5 h-4 w-4" />
                      {post.views}次阅读
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif text-card-foreground">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={`/blog/${post.slug}`} className="group">
                      阅读全文
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button 
            variant="outline" 
            className="mt-6"
            onClick={() => setSelectedCategory(null)}
          >
            返回分类列表
          </Button>
        </div>
      )}
    </>
  );
}
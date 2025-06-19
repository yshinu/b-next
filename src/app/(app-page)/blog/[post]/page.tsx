import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Github,
  Heart,
  Mail,
  MessageSquare,
  Twitter,
  Bookmark,
  Share2,
} from 'lucide-react';

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
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 文章内容 */}
          <div className="lg:col-span-2">
            <article className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl shadow-sm p-6 mb-12">
              {/* 文章元信息 */}
              <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-6 gap-4">
                <span className="bg-primary text-secondary px-3 py-1 rounded-full font-medium">
                  科技人文
                </span>
                <div className="flex items-center">
                  <CalendarDays className="mr-1.5 h-4 w-4" />
                  <span>2023年9月5日</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1.5 h-4 w-4" />
                  <span>12分钟阅读</span>
                </div>
              </div>

              {/* 文章标题 */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-card-foreground">
                数字时代的诗意栖居
              </h1>

              {/* 文章副标题 */}
              <p className="text-xl text-muted-foreground mb-10 italic border-l-4 border-primary pl-4 py-2">
                在算法统治的世界里，如何保持内心的诗意与人文关怀？探索技术与精神生活的平衡之道。
              </p>

              {/* 文章封面图 */}
              <div className="rounded-xl overflow-hidden mb-10 aspect-video bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl font-serif mb-4">数字时代 × 诗意栖居</div>
                  <div className="text-muted-foreground">摄影：林思哲 / 2023年9月</div>
                </div>
              </div>

              {/* 文章正文 */}
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="mb-6 leading-relaxed">
                  在信息爆炸的时代，我们被各种算法推荐的内容包围，从清晨醒来到夜晚入睡，数字设备几乎占据了我们清醒时的每一刻。这种无处不在的数字连接，在带来便利的同时，也悄然改变着我们的思考方式和情感体验。
                </p>

                <p className="mb-6 leading-relaxed">
                  诗人里尔克曾写道："我生活在不断扩大的轨道上，它们覆盖万物之上。" 在数字时代，我们的轨道确实在不断扩大，但这种扩大是横向的而非纵向的——我们接触的信息越来越多，但深度却越来越浅。当算法不断推送符合我们偏好的内容时，我们的认知边界实际上在缩小而非扩大。
                </p>

                <h2 className="text-2xl font-bold font-serif mt-10 mb-6 text-card-foreground">被量化的情感体验</h2>

                <p className="mb-6 leading-relaxed">
                  社交媒体上的点赞、分享和评论数量，成为了我们衡量内容价值的标准。一首诗的价值不再取决于它的美学深度和情感共鸣，而是看它在15秒内能获得多少互动。当我们习惯于用数字量化一切时，那些无法被量化的微妙情感体验——如黄昏时的忧郁、雨后泥土的芬芳、深夜独处时的哲思——便逐渐从我们的生活中退场。
                </p>

                <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 italic bg-muted/20 text-card-foreground">
                  "技术本身并无善恶，但技术的应用方式却深刻影响着人类的精神生态。当我们将所有事物都转化为数据点时，我们也在将自己转化为数据点。"
                  <footer className="mt-2 not-italic text-muted-foreground">—— 科技哲学家 陈明远</footer>
                </blockquote>

                <p className="mb-6 leading-relaxed">
                  这种量化思维甚至延伸到了我们的情感关系中。约会应用根据算法匹配度推荐潜在伴侣，朋友关系通过社交媒体互动频率来评估亲密程度。当人际关系被简化为数据点时，那些在缓慢相处中自然产生的默契、在共同经历中培养的理解，这些无法被量化的珍贵品质，反而被边缘化了。
                </p>

                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-xl my-8">
                  <h3 className="font-bold text-lg mb-3 font-serif">诗意栖居的实践建议：</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>建立"数字斋戒"习惯：每周留出一天时间远离所有数字设备</li>
                    <li>培养深度阅读能力：每天至少30分钟不受干扰的纸质书阅读</li>
                    <li>恢复手工书写：用笔记录思考，体验文字与纸张的触感交流</li>
                    <li>创造无目的时间：允许自己无所事事，让思绪自由漫游</li>
                    <li>发展线下兴趣：参加实体社区活动，体验真实的人际互动</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold font-serif mt-10 mb-6 text-card-foreground">重建深度思考的能力</h2>

                <p className="mb-6 leading-relaxed">
                  数字时代的浅层信息消费模式正在重塑我们的大脑神经通路。研究发现，频繁的多任务处理和快速信息浏览会降低我们的专注力和深度思考能力。当我们习惯了在15秒短视频中获取信息，阅读长篇复杂文本就变得困难；当我们习惯了碎片化的社交媒体表达，构建复杂论证的能力也随之退化。
                </p>

                <p className="mb-6 leading-relaxed">
                  要重建深度思考的能力，我们需要刻意创造"慢思考"的空间。这包括：
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <Card className="bg-background/50 backdrop-blur-sm border-border/30">
                    <CardContent className="p-6">
                      <h3 className="font-bold font-serif mb-3">沉思练习</h3>
                      <p>每天留出10-15分钟静坐沉思，不追求结论，只是观察自己的思绪流动，培养对思维过程的元认知。</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/50 backdrop-blur-sm border-border/30">
                    <CardContent className="p-6">
                      <h3 className="font-bold font-serif mb-3">延时回应</h3>
                      <p>在社交媒体上看到引发强烈情绪的内容时，强制自己等待至少30分钟再回应，让理性思考介入情感反应。</p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold font-serif mt-10 mb-6 text-card-foreground">技术的人文转向</h2>

                <p className="mb-6 leading-relaxed">
                  面对数字时代的挑战，我们需要的不是拒绝技术，而是引导技术发展的人文转向。越来越多的科技从业者开始反思技术的本质目的，探索如何让技术服务于人的全面发展而非碎片化人的注意力。
                </p>

                <p className="mb-6 leading-relaxed">
                  一些值得关注的趋势包括：
                </p>

                <ul className="list-decimal pl-5 space-y-3 mb-8">
                  <li><strong>慢科技运动</strong>：设计鼓励专注而非分心的数字产品</li>
                  <li><strong>人文科技教育</strong>：在STEM教育中融入哲学、伦理和美学课程</li>
                  <li><strong>算法透明度</strong>：推动算法决策的透明度和可解释性</li>
                  <li><strong>数字健康设计</strong>：在产品设计中内置使用时长提醒和休息提示</li>
                </ul>

                <p className="mb-6 leading-relaxed">
                  真正的诗意栖居，不在于完全逃离数字世界，而在于培养一种自主性——能够自由选择何时连接、何时断开；能够区分哪些技术真正丰富我们的生活，哪些只是在消耗我们的注意力；能够在算法的包围中保持独立思考的能力。
                </p>

                <h2 className="text-2xl font-bold font-serif mt-10 mb-6 text-card-foreground">结语：在比特与灵魂之间</h2>

                <p className="mb-6 leading-relaxed">
                  数字时代带来的挑战，本质上是关于如何在一个高度技术化的环境中保持人性的完整。诗意栖居不是怀旧的浪漫幻想，而是一种必要的生存智慧——在比特洪流中守护灵魂的栖息地。
                </p>

                <p className="mb-6 leading-relaxed">
                  当我们能够有意识地使用技术，而不是被技术所使用；当我们能在数字连接中保持内心的独立空间；当我们能在数据化的世界中继续珍视那些无法被量化的体验——那时，我们才真正找到了数字时代的诗意栖居之道。
                </p>
              </div>

              {/* 文章标签 */}
              <div className="flex flex-wrap gap-2 mt-10 mb-8">
                {['数字人文', '科技哲学', '注意力经济', '慢生活', '精神生态'].map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* 互动区域 */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-border/30">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    <span>赞赏观点</span>
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Bookmark className="h-4 w-4 mr-2" />
                    <span>收藏文章</span>
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">分享至：</span>
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.218.682-.485 0-.236-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </article>

            {/* 评论区 */}
            <Card className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  读者评论 (24)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* 评论1 */}
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12 border-2 border-background">
                      <AvatarImage src="https://i.pravatar.cc/150?u=user1" alt="张明" />
                      <AvatarFallback>张</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold">张明</h4>
                        <span className="text-sm text-muted-foreground">2小时前</span>
                      </div>
                      <p className="text-muted-foreground">
                        这篇文章深深触动了我。最近我也在尝试"数字斋戒"，每周日完全断开网络连接，最初很不适应，但现在已经成为我最期待的一天。重新找回了阅读纸质书的乐趣，也重新发现了身边的美好。
                      </p>
                      <div className="flex items-center mt-3 space-x-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Heart className="h-4 w-4 mr-1" /> 42
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          回复
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* 评论2 */}
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12 border-2 border-background">
                      <AvatarImage src="https://i.pravatar.cc/150?u=user2" alt="王思颖" />
                      <AvatarFallback>王</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold">王思颖</h4>
                        <span className="text-sm text-muted-foreground">5小时前</span>
                      </div>
                      <p className="text-muted-foreground">
                        作为科技行业的从业者，这篇文章给了我很多反思。我们总是追求更多的用户使用时长，但很少思考这对人的精神世界意味着什么。作者提出的人文转向确实是我们这个行业急需的。
                      </p>
                      <div className="flex items-center mt-3 space-x-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Heart className="h-4 w-4 mr-1" /> 28
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          回复
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* 添加评论框 */}
                  <div className="pt-6 mt-8 border-t border-border/30">
                    <h4 className="font-bold mb-4">发表评论</h4>
                    <div className="space-y-4">
                      <textarea 
                        className="w-full min-h-[120px] p-4 bg-muted/20 border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        placeholder="分享您的想法..."
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src="https://i.pravatar.cc/150?u=comment" alt="Your Avatar" />
                            <AvatarFallback>Y</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">林思哲</span>
                        </div>
                        <Button>
                          提交评论
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 侧边栏 */}
          <aside className="lg:col-span-1 space-y-10">
            {/* 作者信息 */}
            <Card className="bg-card/60 backdrop-blur-xl border border-border/50 text-center">
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

            {/* 文章目录 */}
            <Card className="bg-card/60 backdrop-blur-xl border border-border/50">
              <CardHeader>
                <CardTitle className="font-serif">本文目录</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="flex items-center py-2 text-muted-foreground hover:text-primary transition-colors">
                      <span className="w-6 text-center mr-2">1</span>
                      <span>被量化的情感体验</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center py-2 text-muted-foreground hover:text-primary transition-colors">
                      <span className="w-6 text-center mr-2">2</span>
                      <span>重建深度思考的能力</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center py-2 text-muted-foreground hover:text-primary transition-colors">
                      <span className="w-6 text-center mr-2">3</span>
                      <span>技术的人文转向</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center py-2 text-muted-foreground hover:text-primary transition-colors">
                      <span className="w-6 text-center mr-2">4</span>
                      <span>结语：在比特与灵魂之间</span>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 相关文章 */}
            <Card className="bg-card/60 backdrop-blur-xl border border-border/50">
              <CardHeader>
                <CardTitle className="font-serif">相关阅读</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  {
                    title: '注意力经济下的自我保全',
                    date: '8月22日',
                    views: 89,
                    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=100&h=100&fit=crop',
                  },
                  {
                    title: '数字极简主义实践指南',
                    date: '7月28日',
                    views: 142,
                    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=100&h=100&fit=crop',
                  },
                  {
                    title: '在算法时代保持独立思考',
                    date: '7月15日',
                    views: 76,
                    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop',
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


    </div>
  );
}
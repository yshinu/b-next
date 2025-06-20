import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Github,
  Mail,
  Twitter,
  MapPin,
  Coffee,
  BookOpen,
  Code,
  Camera,
  Music,
  ExternalLink,
  Send,
  Linkedin} from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* 主体内容 */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 主内容区域 */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 页面标题 */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                关于
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  我
                </span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
                一个在思想与文字间游走的记录者，在科技与人文的交汇点寻找生活的诗意。
              </p>
            </div>

            {/* 关于我部分 */}
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">我的故事</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    你好，我是林思哲。在这个快速变化的数字时代，我选择用文字记录下内心的思考与感悟。
                    作为一名思考者与记录者，我相信每个平凡的日子里都藏着不平凡的故事。
                  </p>
                  
                  <p>
                    我的文字游走在科技与人文之间，试图在算法统治的世界里保持内心的诗意。
                    无论是深夜里的一杯咖啡，还是清晨时的第一缕阳光，都可能成为我创作的灵感源泉。
                  </p>
                  
                  <p>
                    在这个博客里，你会看到我对生活哲学的思辨，对科技人文的探索，
                    以及在城市中的观察与感悟。我希望通过这些文字，能与你产生思想的共鸣。
                  </p>
                </div>

                {/* 个人标签 */}
                <div className="mt-8">
                  <h4 className="font-medium mb-4 text-card-foreground">我的标签</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: Coffee, text: '咖啡爱好者' },
                      { icon: BookOpen, text: '阅读者' },
                      { icon: Code, text: '技术探索' },
                      { icon: Camera, text: '摄影记录' },
                      { icon: Music, text: '音乐聆听' },
                      { icon: MapPin, text: '城市漫步' }
                    ].map((tag, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                        <tag.icon className="h-3.5 w-3.5" />
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 成就数据 */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { number: '61', label: '篇文章' },
                    { number: '1.2K', label: '次阅读' },
                    { number: '186', label: '位读者' },
                    { number: '3', label: '年坚持' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 友情链接部分 */}
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">友情链接</CardTitle>
                <p className="text-muted-foreground">与我一同思考与记录的朋友们</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: '文字咖啡馆',
                      description: '用文字温暖心灵的角落',
                      url: 'https://example.com',
                      avatar: 'https://i.pravatar.cc/40?u=friend1'
                    },
                    {
                      name: '城市观察者',
                      description: '记录都市生活的点点滴滴',
                      url: 'https://example.com',
                      avatar: 'https://i.pravatar.cc/40?u=friend2'
                    },
                    {
                      name: '哲学思辨',
                      description: '在哲学中寻找生活的意义',
                      url: 'https://example.com',
                      avatar: 'https://i.pravatar.cc/40?u=friend3'
                    },
                    {
                      name: '科技人文',
                      description: '探索技术与人性的平衡',
                      url: 'https://example.com',
                      avatar: 'https://i.pravatar.cc/40?u=friend4'
                    },
                    {
                      name: '慢生活指南',
                      description: '在快节奏中寻找内心宁静',
                      url: 'https://example.com',
                      avatar: 'https://i.pravatar.cc/40?u=friend5'
                    },
                    {
                      name: '阅读笔记',
                      description: '分享书中的智慧与感悟',
                      url: 'https://example.com',
                      avatar: 'https://i.pravatar.cc/40?u=friend6'
                    }
                  ].map((friend, index) => (
                    <a
                      key={index}
                      href={friend.url}
                      className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all hover:shadow-sm"
                    >
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>{friend.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <h4 className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                          {friend.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {friend.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 联系我部分 */}
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">联系我</CardTitle>
                <p className="text-muted-foreground">很高兴与你建立连接，分享彼此的思考</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 联系方式 */}
                  <div className="space-y-6">
                    <h4 className="font-medium text-card-foreground">联系方式</h4>
                    <div className="space-y-4">
                      {[
                        { icon: Mail, label: '邮箱', value: 'linsizhev@example.com', href: 'mailto:linsizhev@example.com' },
                        { icon: Twitter, label: 'Twitter', value: '@linsizhev', href: 'https://twitter.com/linsizhev' },
                        { icon: Github, label: 'GitHub', value: 'linsizhev', href: 'https://github.com/linsizhev' },
                        { icon: Linkedin, label: 'LinkedIn', value: '林思哲', href: 'https://linkedin.com/in/linsizhev' }
                      ].map((contact, index) => (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <contact.icon className="h-5 w-5" />
                          <div>
                            <div className="font-medium">{contact.label}</div>
                            <div className="text-sm group-hover:underline">{contact.value}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 留言表单 */}
                  <div className="space-y-6">
                    <h4 className="font-medium text-card-foreground">给我留言</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-card-foreground mb-2 block">
                          姓名
                        </label>
                        <Input placeholder="请输入您的姓名" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-card-foreground mb-2 block">
                          邮箱
                        </label>
                        <Input type="email" placeholder="请输入您的邮箱" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-card-foreground mb-2 block">
                          留言内容
                        </label>
                        <textarea
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="分享您的想法..."
                        />
                      </div>
                      <Button className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        发送留言
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* 侧边栏 */}
          <aside className="lg:col-span-1 space-y-10">
            {/* 作者信息卡片 */}
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
                <p className="text-sm text-muted-foreground mb-4">
                  在科技与人文的交叉路口寻找灵感，记录思想旅程中的点滴感悟。
                </p>
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

            {/* 个人时间线 */}
            <Card className="bg-card/60 backdrop-blur-xl border-border/50">
              <CardHeader>
                <CardTitle className="font-serif">成长足迹</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { year: '2024', event: '开始深度思考科技与人文的关系' },
                    { year: '2023', event: '创建个人博客，记录生活感悟' },
                    { year: '2022', event: '开始践行慢生活哲学' },
                    { year: '2021', event: '培养阅读与写作的习惯' }
                  ].map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">{milestone.year}</span>
                      </div>
                      <div className="flex-grow pt-2">
                        <p className="text-sm text-muted-foreground">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 快速联系 */}
            <Card className="bg-card/60 backdrop-blur-xl border-border/50">
              <CardHeader>
                <CardTitle className="font-serif">快速联系</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="mailto:linsizhev@example.com">
                    <Mail className="h-4 w-4 mr-2" />
                    发送邮件
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://twitter.com/linsizhev">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter 互动
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://github.com/linsizhev">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub 协作
                  </a>
                </Button>
              </CardContent>
            </Card>

          </aside>
        </div>
      </main>
    </div>
  );
}
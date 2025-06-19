import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Sub() {
  return (
<section className="py-20 bg-primary/60 text-primary-foreground mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 font-serif">订阅更新</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              每月接收精选文章与思考随笔，让深度内容直接送达您的收件箱。无广告，无打扰，只有真诚的文字。
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="您的电子邮箱"
                className="flex-grow text-foreground bg-primary-foreground/20 placeholder:text-primary-foreground/60 border-0 focus-visible:ring-2 focus-visible:ring-primary-foreground"
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="font-bold"
              >
                立即订阅
              </Button>
            </form>
            <p className="text-sm text-primary-foreground/70 mt-4">
              随时可以退订。尊重您的隐私，绝不分享邮箱地址。
            </p>
          </div>
        </div>
      </section>
  );
}

export default Sub;

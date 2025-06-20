
import { BlogPostForm } from './_components/blogPost-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MarkdownEditor from './_components/markdown-editor';

function CreateBlog() {
  return (
    <div  className="flex flex-col md:flex-row h-full gap-4 p-4">
      {/* 左侧区域 (用于富文本编辑器) */}
      <div className="flex-1 min-w-0">
        <Card>
          <CardHeader>
            <CardTitle>博文内容</CardTitle>
          </CardHeader>
          <CardContent className="h-full">

            <div className="max-w-4xl mx-auto h-full">

              <MarkdownEditor />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 右侧面板 - 始终存在且响应式 */}
      <div className="w-full md:w-96 flex-shrink-0">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>博文设置</CardTitle>
          </CardHeader>
          <CardContent>
            <BlogPostForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CreateBlog;

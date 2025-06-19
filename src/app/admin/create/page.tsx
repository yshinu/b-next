'use client';

import { useState } from 'react';
import { BlogPostForm } from "./_components/blogPost-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelRightClose } from 'lucide-react';
import { cn } from '@/lib/utils';

function CreateBlog() {
    // 默认展开右侧面板
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(true);

    return (
        <div className="flex h-full gap-4 p-4">
            {/* 左侧区域 (用于富文本编辑器) */}
            <div className="flex-1 transition-all duration-300">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>博文内容</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-96 bg-gray-100 rounded-md flex items-center justify-center">
                            <p className="text-gray-500">富文本编辑器区域</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 控制按钮和右侧面板的容器 */}
            <div className="flex items-start">
                {/* 右侧可折叠面板 */}
                <div
                    className={cn(
                        'transition-all duration-300 overflow-hidden',
                        isSettingsPanelOpen ? 'w-96' : 'w-0'
                    )}
                >
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>博文设置</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <BlogPostForm />
                        </CardContent>
                    </Card>
                </div>
                
                {/* 切换按钮 */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsSettingsPanelOpen(!isSettingsPanelOpen)}
                    className="ml-2"
                    aria-label="Toggle settings panel"
                >
                    {isSettingsPanelOpen ? (
                        <PanelRightClose className="h-4 w-4" />
                    ) : (
                        <PanelLeftClose className="h-4 w-4" />
                    )}
                </Button>
            </div>
        </div>
    );
}

export default CreateBlog;
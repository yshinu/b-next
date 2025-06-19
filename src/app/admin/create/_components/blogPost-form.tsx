'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import * as z from 'zod';
import { format, setHours, setMinutes, setSeconds } from 'date-fns';
import { cn } from '@/lib/utils'; // shadcn-ui 默认的工具函数

// 引入 shadcn/ui 组件
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { postFormSchema } from '../schema';
import { zhCN } from 'date-fns/locale';
import { useState } from 'react';

export function BlogPostForm() {
  // 1. 定义你的表单.
  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      cover_image: '',
      status: 'DRAFT',
      visibility: 'PUBLIC',
      password: '',
      published_at: new Date(),
    },
  });

  // 监听 "visibility" 字段的值
  const visibility = form.watch('visibility');

  // 2. 定义提交处理函数.
  function onSubmit(values: z.infer<typeof postFormSchema>) {
    // 在这里处理表单提交逻辑
    // 例如: 发送数据到你的 API
    console.log('Form submitted with values:', values);
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* 标题 */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>标题 (Title)</FormLabel>
              <FormControl>
                <Input placeholder="请输入文章标题" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Slug */}
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL Slug</FormLabel>
              <FormControl>
                <Input placeholder="your-post-slug" {...field} />
              </FormControl>
              <FormDescription>
                这是 URL 的一部分，建议使用小写字母、数字和连字符。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 摘要 */}
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>摘要 (Excerpt)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="请输入文章摘要 (可选)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 封面图片 */}
        <FormField
          control={form.control}
          name="cover_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>封面图片 (Cover Image)</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.png" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 状态 */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>状态 (Status)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="选择一个发布状态" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DRAFT">草稿 (Draft)</SelectItem>
                  <SelectItem value="PUBLISHED">已发布 (Published)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 可见性 */}
        <FormField
          control={form.control}
          name="visibility"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>可见性 (Visibility)</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="PUBLIC" />
                    </FormControl>
                    <FormLabel className="font-normal">公开 (Public)</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="PASSWORD" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      密码保护 (Password Protected)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 密码 (条件渲染) */}
        {visibility === 'PASSWORD' && (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>文章密码 (Password)</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="请输入至少 6 位数的密码"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* 发布时间 */}
       <FormField
          control={form.control}
          name="published_at"
          render={({ field }) => (
            // FormItem 将管理标签和错误消息
            <FormItem className="flex flex-col">
              {/* 这里不再需要独立的 FormLabel，因为它被包含在了 DateTimePicker 内部 */}
              <FormLabel className="mb-2">发布时间 (Published At)</FormLabel>
              <FormControl>
                <DateTimePicker field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">提交</Button>
      </form>
    </Form>
  );
}
interface DateTimePickerProps {
  field: ControllerRenderProps<z.infer<typeof postFormSchema>, 'published_at'>;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ field }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const dateValue = field.value ? new Date(field.value) : null;

  // 当时间输入框变化时调用
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    if (!time || !dateValue) return;

    const [hours, minutes] = time.split(':').map(Number);
    let newDate = setHours(dateValue, hours);
    newDate = setMinutes(newDate, minutes);
    // 可选：将秒设置为0
    newDate = setSeconds(newDate, 0);

    field.onChange(newDate); // 更新表单状态
  };

  // 当日历选择日期时调用
  const handleDateChange = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    
    // 保留当前的时间，只更新日期部分
    const currentHours = dateValue?.getHours() ?? 0;
    const currentMinutes = dateValue?.getMinutes() ?? 0;

    let newDate = setHours(selectedDate, currentHours);
    newDate = setMinutes(newDate, currentMinutes);
    newDate = setSeconds(newDate, 0);

    field.onChange(newDate);
    setPopoverOpen(false); // 关闭日历弹窗
  };

  return (
    <div className="flex items-end gap-4">
      {/* 日期选择器 */}
      <div className="flex flex-col gap-2">
        <FormLabel>日期 (Date)</FormLabel>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[240px] justify-start text-left font-normal',
                !dateValue && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateValue ? (
                format(dateValue, 'PPP', { locale: zhCN })
              ) : (
                <span>选择一个日期</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={dateValue ?? undefined}
              onSelect={handleDateChange}
              autoFocus
              locale={zhCN}
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* 时间选择器 */}
      <div className="flex flex-col gap-2">
        <FormLabel htmlFor="time-picker">时间 (Time)</FormLabel>
        <Input
          id="time-picker"
          type="time"
          step="60" // step="60" 表示只接受分钟输入
          value={dateValue ? format(dateValue, 'HH:mm') : ''}
          onChange={handleTimeChange}
          className="w-24"
          disabled={!dateValue} // 如果没有先选择日期，则禁用时间选择
        />
      </div>
    </div>
  );
};

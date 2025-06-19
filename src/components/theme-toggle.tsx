'use client';

import { useTheme } from 'next-themes';
import { SunMedium, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function Themetoggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="size-8 px-0"
      onClick={toggleTheme}
    >
      {resolvedTheme === 'light' ? (
        <SunMedium className="rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="absolute rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">切换主题</span>
    </Button>
  );
}

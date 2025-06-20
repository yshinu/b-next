'use client';
import { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useTheme } from 'next-themes';
import '@/app/hqbw.css';
import useContentStore from '../contentStore';
export default () => {
  const { content, setContent } = useContentStore();
  const { theme } = useTheme();
  return (
    <MdEditor
      style={{ height: '80vh'}}
      theme={theme as 'dark' | 'light'}
      value={content}
      preview={false}
      previewTheme="hqbw"
      onChange={setContent}
      toolbars={[
        'bold',
        'underline',
        'italic',
        '-',
        'strikeThrough',
        'sub',
        'sup',
        'quote',
        'unorderedList',
        'orderedList',
        'task',
        '-',
        'codeRow',
        'code',
        'link',
        'image',
        'table',
        'mermaid',
        'katex',
        '-',
        'revoke',
        'next',
        'save',
        '=',
        'pageFullscreen',
        'fullscreen',
        'preview',
        'previewOnly',
        'htmlPreview',
        'catalog',
      ]}
    />
  );
};

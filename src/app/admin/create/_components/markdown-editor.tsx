import { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useTheme } from 'next-themes';
import "./hqbw.css"
export default () => {
  const [text, setText] = useState('hello md-editor-rt！');
  const { theme } = useTheme();
  return (
    <MdEditor
      style={{ height: '100%' }}
      theme={theme as 'dark' | 'light'}
      value={text}
      previewTheme='hqbw'
      onChange={setText}
    />
  );
};

import { create } from 'zustand';

// 1. 定义 Store 的 State 和 Actions 的接口
interface ContentState {
  /**
   * 当前的 content 值
   */
  content: string;
  /**
   * 用于更新 content 值的方法
   * @param newContent 新的 content 字符串
   */
  setContent: (newContent: string) => void;
}

const useContentStore = create<ContentState>((set) => ({
  content: '这是初始的内容',

  setContent: (newContent) => set({ content: newContent }),
}));

export default useContentStore;
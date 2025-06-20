async function getSidebarData() {
  // 模拟慢速数据获取
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    author: {
      name: '林思哲',
      avatar: 'https://i.pravatar.cc/150?u=author',
      title: '思考者 & 记录者',
      bio: '在科技与人文的交叉路口寻找灵感'
    },
    stats: {
      totalCategories: 5,
      totalPosts: 61,
      mostActiveCategory: '科技人文'
    },
    recentPosts: [
      {
        id: 1,
        title: '数字时代的诗意栖居',
        date: '2023年9月5日',
        readTime: '12分钟',
        slug: 'digital-age-poetry'
      }
    ]
  };
}

export default getSidebarData;
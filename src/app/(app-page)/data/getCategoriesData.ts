async function getCategoriesData() {
  // 模拟慢速数据获取
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return [
    {
      id: 1,
      name: '科技人文',
      slug: 'tech-humanities',
      description: '探索技术与人文的交汇点，思考数字时代的生活方式与价值观念。',
      count: 18,
      color: 'bg-blue-500',
      posts: [
        {
          id: 1,
          title: '数字时代的诗意栖居',
          excerpt: '在算法统治的世界里，如何保持内心的诗意与人文关怀？',
          date: '2023年9月5日',
          readTime: '12分钟',
          views: 324,
          slug: 'digital-age-poetry'
        },
        {
          id: 2,
          title: 'AI与创造力的未来',
          excerpt: '人工智能是否会取代人类的创造力，还是成为我们的创作伙伴？',
          date: '2023年8月22日',
          readTime: '15分钟',
          views: 267,
          slug: 'ai-creativity-future'
        },
        {
          id: 3,
          title: '数字极简主义实践指南',
          excerpt: '在信息过载的时代，如何通过数字极简主义重获内心的平静。',
          date: '2023年7月28日',
          readTime: '10分钟',
          views: 412,
          slug: 'digital-minimalism-guide'
        }
      ]
    },
    {
      id: 2,
      name: '生活哲学',
      slug: 'life-philosophy',
      description: '从日常生活中汲取智慧，思考人生的意义与价值，寻找内心的平静与力量。',
      count: 12,
      color: 'bg-green-500',
      posts: [
        {
          id: 4,
          title: '平凡中的不平凡',
          excerpt: '在日复一日的平淡生活中，如何发现那些微小而珍贵的闪光点？',
          date: '2023年8月28日',
          readTime: '8分钟',
          views: 198,
          slug: 'extraordinary-in-ordinary'
        },
        {
          id: 5,
          title: '在不确定中寻找确定',
          excerpt: '面对未来的不确定性，如何在变化中找到内心的稳定？',
          date: '2023年8月15日',
          readTime: '11分钟',
          views: 287,
          slug: 'certainty-in-uncertainty'
        }
      ]
    },
    {
      id: 3,
      name: '读书笔记',
      slug: 'reading-notes',
      description: '记录阅读过程中的思考与感悟，分享好书推荐与深度解读。',
      count: 15,
      color: 'bg-purple-500',
      posts: [
        {
          id: 6,
          title: '《沉思录》中的智慧',
          excerpt: '马可·奥勒留的哲学思考如何指导我们面对现代生活的挑战。',
          date: '2023年9月1日',
          readTime: '14分钟',
          views: 156,
          slug: 'meditations-wisdom'
        }
      ]
    },
    {
      id: 4,
      name: '城市观察',
      slug: 'city-observation',
      description: '观察城市生活的细节，记录都市人的生存状态与精神面貌。',
      count: 9,
      color: 'bg-orange-500',
      posts: [
        {
          id: 7,
          title: '咖啡馆里的人间百态',
          excerpt: '在城市的角落里，每个人都有着自己的故事。',
          date: '2023年8月10日',
          readTime: '9分钟',
          views: 203,
          slug: 'cafe-human-stories'
        }
      ]
    },
    {
      id: 5,
      name: '旅行随笔',
      slug: 'travel-notes',
      description: '记录旅途中的见闻与感受，分享不同地方的文化与风景。',
      count: 7,
      color: 'bg-red-500',
      posts: [
        {
          id: 8,
          title: '京都的慢时光',
          excerpt: '在古都的街巷中，感受时间的厚重与宁静。',
          date: '2023年7月20日',
          readTime: '13分钟',
          views: 298,
          slug: 'kyoto-slow-time'
        }
      ]
    }
  ];
}

export default getCategoriesData;
import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();


// 定义要创建的分类数据
const categoriesData = [
  {
    name: '前端开发',
    slug: 'frontend-development',
    description: '分享关于 JavaScript、TypeScript、React、Next.js 等前端技术的文章和心得。',
  },
  {
    name: '后端技术',
    slug: 'backend-technology',
    description: '探索 Node.js、Express、数据库以及服务器架构等后端领域的知识。',
  },
  {
    name: '全栈探索',
    slug: 'full-stack-exploration',
    description: '贯穿前后端的开发实践，讨论全栈项目的构建与最佳实践。',
  },
  {
    name: '技术人生',
    slug: 'tech-life',
    description: '不止于代码，也关于程序员的职业发展、学习方法和生活感悟。',
  },
  {
    name: '实战教程',
    slug: 'practical-tutorials',
    description: '一步步带你完成有趣项目的详细教程和指南。',
  },
];

async function main() {
  console.log(`开始执行 seed 脚本...`);

  for (const catData of categoriesData) {
    // 使用 upsert 来创建或更新分类
    // 它会根据 `slug` 字段查找，如果找到就更新，如果没找到就创建
    const category = await prisma.category.upsert({
      where: { slug: catData.slug }, // 用于查找记录的唯一标识
      update: {}, // 如果找到了，这里可以指定需要更新的数据（我们这里不需要更新，所以留空）
      create: catData, // 如果没找到，使用这里的数据创建新记录
    });
    console.log(`创建或更新了分类: ${category.name} (ID: ${category.id})`);
  }

  console.log(`Seed 脚本执行完毕。`);
}

// 执行 main 函数并处理可能的错误
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // 确保在脚本执行完毕后断开数据库连接
    await prisma.$disconnect();
  });
export const seo = {
  title: 'LUPIN ME | 开发者、架构师、IT运维、个人博客',
  description:
    '我叫 LUPIN，一名IT工程师，本站关注互联网以及分享IT运维工作经验的个人博客，由教程、生活随笔以及软件分享等分类组成。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://lupin.me'
      : 'http://localhost:3000'
  ),
} as const

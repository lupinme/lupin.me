import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '推荐项目'
const description =
  '挖掘Github优质开源项目,帮助用户发现有趣、实用、流行、好玩的开源项目'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          挖掘 Github 开源项目。
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          兴趣是最好的老师，这里能够帮你找到编程的兴趣，让你用很短时间感受到开源的魅力，爱上开源！
          下面就是我筛选出来我觉得还不错的项目，也是我在技术领域中尝试和探索的最好见证。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600

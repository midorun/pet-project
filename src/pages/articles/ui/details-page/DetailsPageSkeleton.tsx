import { Stack } from '@mui/joy'

import { ArticleDetailsHeaderSkeleton } from '@entities/article'
import CodeSkeleton from '@entities/article/ui/code/CodeSkeleton'
import TextSkeleton from '@entities/article/ui/text/TextSkeleton'

const DetailsPageSkeleton = () => {
  return (
    <Stack gap={4}>
      <ArticleDetailsHeaderSkeleton />
      <TextSkeleton />
      <CodeSkeleton />
    </Stack>
  )
}

export default DetailsPageSkeleton

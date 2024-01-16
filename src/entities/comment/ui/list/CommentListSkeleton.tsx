import { Stack } from '@mui/joy'

import CommentSkeleton from '../CommentSkeleton'

const CommentListSkeleton = () => {
  return (
    <Stack rowGap={2}>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </Stack>
  )
}
export default CommentListSkeleton

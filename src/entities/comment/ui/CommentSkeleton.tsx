import { Card, Skeleton, Typography } from '@mui/joy'

const CommentSkeleton = () => {
  return (
    <Card>
      <Typography>
        <Skeleton>{'Do non cillum laborum'}</Skeleton>
      </Typography>
      <Typography>
        <Skeleton>
          {
            'Elit occaecat exercitation nostrud dolore ea ut ullamco exercitation culpa.'
          }
        </Skeleton>
      </Typography>
    </Card>
  )
}
export default CommentSkeleton

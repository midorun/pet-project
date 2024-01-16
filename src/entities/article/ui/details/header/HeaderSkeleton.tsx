import { Stack, AspectRatio, Skeleton, Typography } from '@mui/joy'

import cn from 'shared/lib/cn'

const HeaderSkeleton = () => {
  return (
    <Stack
      direction={'column'}
      gap={2}
    >
      <AspectRatio sx={{ width: 300, margin: '0 auto' }}>
        <Skeleton>
          <img
            className={cn('w5 h-52 w-52 self-center')}
            src={''}
            alt={''}
          />
        </Skeleton>
      </AspectRatio>
      <Typography level="h1">
        <Skeleton>
          {'Officia cupidatat magna pariatur esse duis sit ad.'}
        </Skeleton>
      </Typography>
      <Typography level="h3">
        <Skeleton>
          {'Ipsum ut Lorem cupidatat occaecat commodo laboris proident.'}
        </Skeleton>
      </Typography>

      <Typography level="body-sm">
        <Skeleton> {10000}</Skeleton>
      </Typography>
    </Stack>
  )
}
export default HeaderSkeleton

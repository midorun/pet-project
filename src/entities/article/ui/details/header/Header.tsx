import { FC } from 'react'

import { Stack, Typography } from '@mui/joy'

import { ArticleType } from '@entities/article'

import { ViewsIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

type Props = Pick<
  ArticleType,
  'createdAt' | 'img' | 'subtitle' | 'title' | 'views'
>

const Header: FC<Props> = (props) => {
  const { createdAt, img, subtitle, title, views } = props

  return (
    <Stack
      direction={'column'}
      rowGap={2}
    >
      <img
        className={cn('w5 h-52 w-52 self-center')}
        src={img}
        alt={title}
      />
      <Typography level="h1">{title}</Typography>
      <Typography level="h3">{subtitle}</Typography>

      <Typography
        level="body-sm"
        startDecorator={<ViewsIcon />}
      >
        {views}
      </Typography>
      <Typography level="body-sm">{createdAt}</Typography>
    </Stack>
  )
}
export default Header

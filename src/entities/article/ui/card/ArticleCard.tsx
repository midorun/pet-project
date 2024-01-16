import { FC, ReactEventHandler } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-internal-modules
import { ArticleDetailsType } from '@entities/article'

import articleImgSrcFallback from 'shared/assets/article-fallback.jpg'
import cn from 'shared/lib/cn'

import { ArticleType } from '../../model/article'
import { blocksMap } from '../details/Details'
import { Box, Card, Typography } from '@mui/joy'

export type DisplayType = 'tile' | 'list'

type ArticleProps = {
  isDisplayTile: boolean
} & ArticleType &
  ArticleDetailsType

const ArticleСard: FC<ArticleProps> = (props) => {
  const { id, img, title, type, views, isDisplayTile, blocks } = props
  const { t } = useTranslation()
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate(id)
  }

  const handleImgError: ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.onerror = null
    e.currentTarget.src = articleImgSrcFallback
  }

  const firstBlock = blocks[0]
  const firstBlockEl = blocksMap[firstBlock.type]

  return (
    <Card onClick={goToDetails}>
      <Box sx={isDisplayTile ? {height: 200, width: 200} : {maxHeight: 550, width: '100%'}}>
        <img
          src={img}
          alt={title}
          onError={handleImgError}
        />
         </Box>

        <div
          className={cn('', {
            'max-w-[200px]': isDisplayTile,
          })}
        >
          <div>
            <Typography>{type}</Typography>
            <Typography>{views}</Typography>
          </div>
          <Typography className="whitespace-normal">{t(title)}</Typography>
          {/*  @ts-expect-error */}
          {firstBlockEl(firstBlock)}
        </div>
     
    </Card>
  )
}

export default ArticleСard

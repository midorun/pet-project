import { FC, ReactEventHandler } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-internal-modules
import { ArticleDetailsType } from '@entities/article'

import articleImgSrcFallback from 'shared/assets/article-fallback.jpg'
import cn from 'shared/lib/cn'
import Card from 'shared/ui/card'

import { ArticleType } from '../../model/article'
import { blocksMap } from '../details/Details'

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
      <div>
        <img
          className={cn('', {
            'h-[200px] w-[200px]': isDisplayTile,
            'max-h-[550px] w-full': !isDisplayTile,
          })}
          src={img}
          alt={title}
          onError={handleImgError}
        />

        <div
          className={cn('', {
            'max-w-[200px]': isDisplayTile,
          })}
        >
          <div>
            <span>{type}</span>
            <span>{views}</span>
          </div>
          <span className="whitespace-normal">{t(title)}</span>
          {/*  @ts-expect-error */}
          {firstBlockEl(firstBlock)}
        </div>
      </div>
    </Card>
  )
}

export default ArticleСard

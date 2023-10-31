import { FC, ReactEventHandler } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line import/no-internal-modules
import articleImgSrcFallback from 'shared/assets/article-fallback.jpg'
import Card from 'shared/ui/card'

import { ArticleType } from '../../model/article'

type ArticleProps = ArticleType

const ArticleСard: FC<ArticleProps> = (props) => {
  const { id, img, title, type, views } = props
  const { t } = useTranslation()
  const navigate = useNavigate()

  console.log(type)

  const goToDetails = () => {
    navigate(id)
  }

  const handleImgError: ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.onerror = null
    e.currentTarget.src = articleImgSrcFallback
  }

  return (
    <Card onClick={goToDetails}>
      <div>
        <img
          className={'h-[200px] w-[200px]'}
          src={img}
          alt={title}
          onError={handleImgError}
        />

        <div className="max-w-[200px]">
          <div>
            <span>{type}</span>
            <span>{views}</span>
          </div>
          <span className="whitespace-normal">{t(title)}</span>
        </div>
      </div>
    </Card>
  )
}

export default ArticleСard

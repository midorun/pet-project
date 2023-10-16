import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import cn from 'shared/lib/cn'
import Card from 'shared/ui/card'

import cns from './ArticleCard.module.scss'

import { ArticleType } from '../../model/article'

type ArticleProps = ArticleType

const ArticleСard: FC<ArticleProps> = (props) => {
  const { id, img, title, type, views } = props
  const { t } = useTranslation()
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate(id)
  }

  return (
    <Card onClick={goToDetails}>
      <div className={cn(cns.ArticleCard)}>
        <img
          className={cns.image}
          src={img}
          alt={title}
        />
        <div>
          <div>
            <span>{...type}</span>
            <span>{views}</span>
          </div>
          <span>{t(title)}</span>
        </div>
      </div>
    </Card>
  )
}

export default ArticleСard

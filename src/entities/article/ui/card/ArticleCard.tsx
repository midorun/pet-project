import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import Card from 'shared/ui/card'

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
      <div>
        <img
          className={'h-52 w-52'}
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

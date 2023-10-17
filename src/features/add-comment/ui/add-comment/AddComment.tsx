import { FC } from 'react'
import cn from 'shared/lib/cn'

import cns from './AddComment.module.scss'
import { useTranslation } from 'react-i18next'

type AddCommentProps = {}

const AddComment: FC<AddCommentProps> = (props) => {
  const {} = props
  const { t } = useTranslation()

  return <div className={cn(cns.AddComment)}>{t('AddComment')}</div>
}

export default AddComment

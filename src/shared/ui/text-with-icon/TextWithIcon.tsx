import { FC, SVGProps } from 'react'

import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'

import cns from './TextWithIcon.module.scss'

type TextWithIconProps = {
  text: string
  icon: FC<SVGProps<SVGSVGElement>>
  reversed?: boolean
}

const TextWithIcon: FC<TextWithIconProps> = (props) => {
  const { icon, text, reversed } = props

  return (
    <div className={cn(cns.TextWithIcon, { [`${cns.reversed}`]: !!reversed })}>
      {icon({})}
      {text}
    </div>
  )
}

export default TextWithIcon

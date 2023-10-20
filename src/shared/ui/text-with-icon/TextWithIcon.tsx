import { FC, SVGProps } from 'react'

import cn from 'shared/lib/cn'

type TextWithIconProps = {
  text: string
  icon: FC<SVGProps<SVGSVGElement>>
  reversed?: boolean
}

const TextWithIcon: FC<TextWithIconProps> = (props) => {
  const { icon, text, reversed } = props

  return (
    <div
      className={cn('flex items-center gap-2', {
        'flex-row-reverse': !!reversed,
      })}
    >
      {icon({})}
      {text}
    </div>
  )
}

export default TextWithIcon

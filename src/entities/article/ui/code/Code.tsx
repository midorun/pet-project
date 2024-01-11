import React, { FC } from 'react'

import { Card } from '@mui/joy'

import { CopyIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

import { CodeBlock } from '../../model/articleDetails'

export type CodeProps = CodeBlock

const Code: FC<CodeProps> = (props) => {
  const { code } = props

  // const [isAnimating, setIsAnimating] = useState(false)

  const copy = () => {
    // setIsAnimating(true)
    navigator.clipboard.writeText(code)
  }

  return (
    <Card variant="solid">
      <code className="relative block">
        <pre>{code}</pre>
        <CopyIcon
          className={cn(
            'absolute right-4 top-4 cursor-pointer duration-75 hover:opacity-60'
            // { ['animate-ping']: isAnimating }
          )}
          onClick={copy}
        />
      </code>
    </Card>
  )
}

export default Code

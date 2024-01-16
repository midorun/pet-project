import React, { FC, useState } from 'react'

import { Card, IconButton } from '@mui/joy'

import { CopyIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

import { CodeBlock } from '../../model/articleDetails'

export type CodeProps = CodeBlock

const Code: FC<CodeProps> = (props) => {
  const { code } = props

  const [isAnimating, setIsAnimating] = useState(false)

  const copy = () => {
    setIsAnimating(true)
    navigator.clipboard.writeText(code)
  }

  return (
    <Card variant="solid">
      <code className="relative block">
        <pre>{code}</pre>
        <IconButton
          style={{
            animationIterationCount: 1,
          }}
          onAnimationEnd={() => setIsAnimating(false)}
          className={cn(
            'absolute! right-4 top-4 cursor-pointer duration-100  hover:opacity-60 focus:animate-ping active:animate-ping'
            // { 'animate-ping': isAnimating }
          )}
          onClick={copy}
        >
          <CopyIcon />
        </IconButton>
      </code>
    </Card>
  )
}

export default Code

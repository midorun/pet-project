import React, { FC, useState } from 'react'

import { Card, IconButton } from '@mui/joy'

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
        <IconButton
          sx={{
            position: 'absolute',
            right: 2,
            top: 2,
            cursor: 'pointer',
            // animationDuration: 100,
            // ":hover" : 'opacity-60',
            // ":focus": ''
          }}
          // style={{
          //   animationIterationCount: 1,
          // }}
          // onAnimationEnd={() => setIsAnimating(false)}
          
          onClick={copy}
        >
          <CopyIcon />
        </IconButton>
      </code>
    </Card>
  )
}

export default Code

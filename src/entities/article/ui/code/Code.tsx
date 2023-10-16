import React, { FC } from 'react'

import { CodeBlock } from 'entities/article/model/articleDetails'

import { CopyIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

import cns from './Code.module.scss'

export type CodeProps = CodeBlock

const Code: FC<CodeProps> = (props) => {
  const { code } = props

  const copy = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <code className={cn(cns.Code)}>
      <pre>{code}</pre>
      <CopyIcon
        className={cn(cns.copyIcon)}
        onClick={copy}
      />
    </code>
  )
}

export default Code

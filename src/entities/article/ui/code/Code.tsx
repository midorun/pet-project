import React, { FC } from 'react'

import { CodeBlock } from 'entities/article/model/articleDetails'

export type CodeProps = CodeBlock

const Code: FC<CodeProps> = (props) => {
  const { code } = props

  return <code>{code}</code>
}

export default Code

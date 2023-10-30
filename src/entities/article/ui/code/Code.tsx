import React, { FC } from 'react'

import { CodeBlock } from 'entities/article/model/articleDetails'

import { CopyIcon } from 'shared/assets/icons'

export type CodeProps = CodeBlock

const Code: FC<CodeProps> = (props) => {
  const { code } = props

  const copy = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <code className="relative block border border-solid border-black px-8 py-4">
      <pre>{code}</pre>
      <CopyIcon
        className="absolute right-4 top-4 cursor-pointer fill-none stroke-[--primary-color]"
        onClick={copy}
      />
    </code>
  )
}

export default Code

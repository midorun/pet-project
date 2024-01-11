import React, { FC } from 'react'

import { Card, Typography } from '@mui/joy'

import { TextBlock } from '../../model/articleDetails'

export type TextProps = TextBlock

const Text: FC<TextProps> = (props) => {
  const { paragraphs } = props

  return (
    <Card>
      {paragraphs.map((paragraph, idx) => {
        return (
          <Typography
            level="body-md"
            key={idx}
            mt={2}
          >
            {paragraph}
          </Typography>
        )
      })}
    </Card>
  )
}

export default Text

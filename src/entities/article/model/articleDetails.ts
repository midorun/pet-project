import { ArticleType } from './article'

export enum ArticleDetailsBlockEnum {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export type Block<T extends ArticleDetailsBlockEnum> = {
  id: string
  type: T
}

export type TextBlock = Block<ArticleDetailsBlockEnum.TEXT> & {
  title?: string
  paragraphs: string[]
}

export type CodeBlock = Block<ArticleDetailsBlockEnum.CODE> & {
  code: string
}

export type ImageBlock = Block<ArticleDetailsBlockEnum.IMAGE> & {
  src: string
  title: string
}

export type ArticleDetailsType = ArticleType & {
  blocks: (TextBlock | CodeBlock | ImageBlock)[]
}

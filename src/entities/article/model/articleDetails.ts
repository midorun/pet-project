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
  paragraphs: string[]
}

export type CodeBlock = Block<ArticleDetailsBlockEnum.CODE> & {
  code: string
}

export type ImageBlock = Block<ArticleDetailsBlockEnum.IMAGE> & {
  src: string
  title: string
}

export type ArticleDetails = {
  id: '1'
  title: 'Javascript news'
  subtitle: 'Что нового в JS за 2022 год?'
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png'
  views: 1022
  createdAt: '26.02.2022'
  type: ['IT']
  blocks: (TextBlock | CodeBlock | ImageBlock)[]
}

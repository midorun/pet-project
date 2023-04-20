import { FunctionComponent } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-types
export type FC<P = {}> = FunctionComponent<P & { className?: string }>

export enum UIVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

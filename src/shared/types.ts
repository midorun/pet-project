export enum UIVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export type PropsWithClassName<P = unknown> = P & {
  className?: string | undefined
}

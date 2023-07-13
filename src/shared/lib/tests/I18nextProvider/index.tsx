import { FC, PropsWithChildren } from 'react'

import { I18nextProvider as ReactI18next } from 'react-i18next'

import i18n from './i18n'

const I18nextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ReactI18next i18n={i18n}>{children}</ReactI18next>
}

export default I18nextProvider

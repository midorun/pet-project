import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/cn'

import cns from './LangSwitch.module.scss'

const LangSwitch: FC = () => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <button
      className={cn(cns.LangSwitch, {}, [])}
      onClick={toggleLang}
    >
      {t('lang')}
    </button>
  )
}

export default LangSwitch

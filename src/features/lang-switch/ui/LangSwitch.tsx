import React from 'react'

import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/cn'
import { FC } from 'shared/types'

import cns from './LangSwitch.module.scss'

type LangSwitchProps = {}

const LangSwitch: FC<LangSwitchProps> = (props) => {
  const { className } = props

  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <button
      className={cn(cns.LangSwitch, {}, [className])}
      onClick={toggleLang}
    >
      {t('lang')}
    </button>
  )
}

export default LangSwitch

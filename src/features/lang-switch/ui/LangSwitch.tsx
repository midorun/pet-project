import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import cn from 'shared/lib/cn'

const LangSwitch: FC = () => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <button
      className={cn('w-max text-[var(--inverted-primary-color)]')}
      onClick={toggleLang}
    >
      {t('lang')}
    </button>
  )
}

export default LangSwitch

import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { dataTestId } from 'widgets/sidebar'

import { LangSwitch } from 'features/lang-switch'
import { ThemeSwitch } from 'features/theme-switch'

import { cn } from 'shared/lib/cn'
import { FC, UIVariantEnum } from 'shared/types'
import Button from 'shared/ui/button/Button'

import cns from './Sidebar.module.scss'

const Sidebar: FC = (props) => {
  const {} = props
  const { t } = useTranslation()

  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <aside
      data-testid={dataTestId}
      className={cn(cns.Sidebar, { [cns.collapsed]: isCollapsed }, [])}
    >
      <Button
        data-testid={'sidebar-toggle'}
        variant={UIVariantEnum.SECONDARY}
        onClick={toggleIsCollapsed}
        className={cn(cns.collapsedSwitch)}
      >
        {t('toggleCollapse')}
      </Button>
      <LangSwitch />
      <ThemeSwitch className={cn(cns.themeSwitch)} />
    </aside>
  )
}
export default Sidebar

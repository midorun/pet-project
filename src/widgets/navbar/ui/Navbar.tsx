import React from 'react'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { AboutIcon, HomeIcon } from 'shared/assets/icons'
import { cn } from 'shared/lib/cn'
import { FC } from 'shared/types'

import cns from './Navbar.module.scss'

type Props = {
  isHovered: boolean
}

const Navbar: FC<Props> = (props) => {
  const { isHovered } = props

  const { t } = useTranslation()

  return (
    <nav
      className={cn(
        cns.navbar,
        { [cns.navbar_hovered]: isHovered, [cns.navbar_unhovered]: !isHovered },
        []
      )}
    >
      <ul className={cn(cns.list, {})}>
        <li className={cn(cns.item, {})}>
          <NavLink
            className={cn(cns.link, {})}
            to={'/home'}
          >
            <HomeIcon className={cns.icon} />
            <span className={cns.linkText}>{t('home')}</span>
          </NavLink>
        </li>
        <li className={cn(cns.item, {})}>
          <NavLink
            className={cn(cns.link, {})}
            to={'/about'}
          >
            <AboutIcon className={cns.icon} />
            <span className={cns.linkText}>{t('about')}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

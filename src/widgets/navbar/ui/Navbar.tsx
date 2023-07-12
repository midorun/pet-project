import React from 'react'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { AboutIcon, HomeIcon } from 'shared/assets/icons'
import { cn } from 'shared/lib/cn'
import { FC } from 'shared/types'

import cns from './Navbar.module.scss'

const Navbar: FC = () => {
  const { t } = useTranslation()

  return (
    <nav className={cn(cns.navbar, {}, [])}>
      <ul className={cn(cns.navbarList, {})}>
        <li className={cn(cns.navbarItem, {})}>
          <NavLink
            className={cn(cns.navbarLink, {})}
            to={'/home'}
          >
            <HomeIcon className={cns.navbarIcon} />
            <span className={cns.navbarLinkText}>{t('home')}</span>
          </NavLink>
        </li>
        <li className={cn(cns.navbarItem, {})}>
          <NavLink
            className={cn(cns.navbarLink, {})}
            to={'/about'}
          >
            <AboutIcon className={cns.navbarIcon} />
            <span className={cns.navbarLinkText}>{t('about')}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

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
            {t('home')}
          </NavLink>
        </li>
        <li className={cn(cns.navbarItem, {})}>
          <NavLink
            className={cn(cns.navbarLink, {})}
            to={'/about'}
          >
            {t('about')}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

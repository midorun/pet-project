import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from 'shared/lib/cn'
import { FC } from 'shared/types'

import cns from './Navbar.module.scss'

export type NavbarProps = {}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props

  return (
    <nav className={cn(cns.navbar, {}, [className])}>
      <ul className={cn(cns.navbarList, {})}>
        <li className={cn(cns.navbarItem, {})}>
          <NavLink
            className={cn(cns.navbarLink, {})}
            to={'/home'}
          >
            Home
          </NavLink>
        </li>
        <li className={cn(cns.navbarItem, {})}>
          <NavLink
            className={cn(cns.navbarLink, {})}
            to={'/about'}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

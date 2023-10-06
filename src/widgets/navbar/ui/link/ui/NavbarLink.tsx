import React, { FC, SVGProps } from 'react'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import cn from 'shared/lib/cn'

import cns from './NavbarLink.module.scss'

export type NavbarLinkProps = {
  to: string
  translationKey?: string
  icon: FC<SVGProps<SVGSVGElement>>
}

const NavbarLink: FC<NavbarLinkProps> = (props) => {
  const { to, translationKey = to, icon } = props

  const { t } = useTranslation()

  return (
    <li>
      <NavLink
        className={cn(cns.NavbarLink, {})}
        to={to}
      >
        <>
          {icon({ className: cns.icon })}
          <span className={cns.text}>{t(translationKey)}</span>
        </>
      </NavLink>
    </li>
  )
}

export default NavbarLink

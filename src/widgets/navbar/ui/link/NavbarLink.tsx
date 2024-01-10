import React, { FC, SVGProps } from 'react'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import cn from 'shared/lib/cn'

export type NavbarLinkProps = {
  to: string
  translationKey?: string
  icon: FC<SVGProps<SVGSVGElement>>
}

const NavbarLink: FC<NavbarLinkProps> = (props) => {
  const { to, translationKey = to, icon } = props

  const { t } = useTranslation()

  return (
    <NavLink
      className={cn('flex cursor-pointer')}
      to={to}
    >
      {icon({ className: 'mr-4 fill-[--inverted-primary-color]' })}
      <span
        className={
          'text-[0px] transition-[font-size] duration-500 group-hover:text-sm'
        }
      >
        {t(translationKey)}
      </span>
    </NavLink>
  )
}

export default NavbarLink

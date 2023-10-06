import React, { FC } from 'react'

import NavbarLink from 'widgets/navbar/ui/link'

import { AboutIcon, HomeIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

import cns from './Navbar.module.scss'

const Navbar: FC = () => {
  return (
    <nav className={cn(cns.navbar)}>
      <ul className={cn(cns.list, {})}>
        <NavbarLink
          to={'home'}
          icon={HomeIcon}
        />

        <NavbarLink
          to={'about'}
          icon={AboutIcon}
        />

        <NavbarLink
          to={'articles'}
          icon={AboutIcon}
        />
      </ul>
    </nav>
  )
}

export default Navbar

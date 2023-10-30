import React, { FC } from 'react'

import { AboutIcon, ArticlesIcon, HomeIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

import NavbarLink from './link/NavbarLink'

const Navbar: FC = () => {
  return (
    <nav className={cn('flex items-center')}>
      <ul className={cn('flex flex-col space-y-3')}>
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
          icon={ArticlesIcon}
        />
      </ul>
    </nav>
  )
}

export default Navbar

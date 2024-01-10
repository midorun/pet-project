import React, { FC } from 'react'

import { List, ListItem } from '@mui/joy'

import { AboutIcon, ArticlesIcon, HomeIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

import NavbarLink from './link/NavbarLink'

const Navbar: FC = () => {
  return (
    <nav
      data-testid={'navbar'}
      className={cn('flex items-center')}
    >
      <List
      // sx={{
      //   maxWidth: 320,
      // }}
      >
        <ListItem>
          <NavbarLink
            to="home"
            icon={HomeIcon}
          />
        </ListItem>
        <ListItem>
          <NavbarLink
            to="articles"
            icon={ArticlesIcon}
          />
        </ListItem>
        <ListItem>
          <NavbarLink
            to="about"
            icon={AboutIcon}
          />
        </ListItem>
      </List>
    </nav>
  )
}

export default Navbar

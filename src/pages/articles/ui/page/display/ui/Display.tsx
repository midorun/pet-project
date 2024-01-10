import { FC } from 'react'
import React from 'react'

import { Button } from '@mui/joy'
import { useRecoilState } from 'recoil'

import { ListIcon, TileIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'

import { displayAtom } from '../model/displayAtom'

const Display: FC = () => {
  const [displayAtomState, setDisplayAtomState] = useRecoilState(displayAtom)

  return (
    <div className={cn('space-x-2')}>
      <Button onClick={() => setDisplayAtomState('tile')}>
        {<TileIcon />}
      </Button>
      <Button onClick={() => setDisplayAtomState('list')}>
        {<ListIcon />}
      </Button>
    </div>
  )
}

export default Display

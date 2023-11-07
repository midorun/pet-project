import { FC } from 'react'

import { useRecoilState } from 'recoil'

import { ListIcon, TileIcon } from 'shared/assets/icons'
import cn from 'shared/lib/cn'
import Button from 'shared/ui/button/Button'

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

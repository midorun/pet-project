import { atom, selector } from 'recoil'

import { DisplayType } from '@entities/article/ui/card/ArticleCard'

export const displayAtom = atom<DisplayType>({
  key: 'displayAtom',
  default: 'list',
})

export const displayAtomSelector = selector({
  key: 'displayAtomSelector',
  get: ({ get }) => {
    const displayAtomState = get(displayAtom)

    return {
      isDisplayTile: displayAtomState === 'tile',
      isDisplayList: displayAtomState === 'list',
    }
  },
})

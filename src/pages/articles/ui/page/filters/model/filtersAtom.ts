import { atom } from 'recoil'

import { ArticlesFiltersType } from '@entities/article/api/getArticles'

import { setQueryParams } from 'shared/lib/set-query-params/setQueryParams'

export const articlesFiltersAtom = atom<ArticlesFiltersType>({
  key: 'filtersAtom',
  default: Object.fromEntries(new URLSearchParams(location.search).entries()),
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        setQueryParams(newValue)
      })
    },
  ],
})

import React from 'react'

import { FC } from 'shared/types'

import './Loader.scss'

export const Loader: FC = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

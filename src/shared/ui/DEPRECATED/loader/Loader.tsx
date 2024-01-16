import React, { FC } from 'react'

import './Loader.css'
/**
 * @deprecated
 */
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

export default Loader

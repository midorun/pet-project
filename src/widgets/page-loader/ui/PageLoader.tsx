import React from 'react'

import { cn } from 'shared/lib/cn'
import { FC } from 'shared/types'
import { Loader } from 'shared/ui/loader/Loader'

import cns from './PageLoader.module.scss'

const PageLoader: FC = () => {
  return (
    <div className={cn(cns.PageLoader)}>
      <Loader />
    </div>
  )
}

export default PageLoader

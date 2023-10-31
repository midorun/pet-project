import React, { FC } from 'react'

import cn from 'shared/lib/cn'
import { Loader } from 'shared/ui/loader/Loader'

const PageLoader: FC = () => {
  return (
    <div className={cn('flex flex-1 items-center justify-center')}>
      <Loader />
    </div>
  )
}

export default PageLoader

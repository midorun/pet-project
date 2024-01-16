import React, {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
} from 'react'

import cn from 'shared/lib/cn'

export type SkeletonProps = {
  isLoading?: boolean
}
/** @deprecated */
const Skeleton: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<SkeletonProps>
> = (props) => {
  const { isLoading, children } = props

  return (
    <div
      className={cn(
        'skeleton shadow-[rgb(0 0 0 / 12%)] overflow-hidden rounded shadow-md',
        {
          ['is-loading']: !!isLoading,
        }
      )}
    >
      <div className={cn('', { ['invisible']: !!isLoading })}>{children}</div>
    </div>
  )
}

export default forwardRef(Skeleton)

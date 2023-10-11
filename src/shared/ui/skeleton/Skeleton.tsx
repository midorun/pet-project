import React, {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
} from 'react'

import cn from 'shared/lib/cn'

import cns from './Skeleton.module.scss'

export type SkeletonProps = {
  isLoading?: boolean
}

const Skeleton: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<SkeletonProps>
> = (props, ref) => {
  const { isLoading, children } = props

  // const childrenRef = useRef<HTMLDivElement>(null)
  // const [childrenRects, setChildrenRects] =
  //   useState<Pick<DOMRect, 'width' | 'height'>>()
  //
  // useLayoutEffect(() => {
  //   if (childrenRef.current) {
  //     const { width, height } = childrenRef.current?.getBoundingClientRect()
  //     setChildrenRects({ width, height })
  //   }
  // }, [])

  // console.log(ref)
  //
  // const [childrenRects, setChildrenRects] =
  //   useState<Pick<DOMRect, 'width' | 'height'>>()
  //
  // useLayoutEffect(() => {
  //   if (ref && typeof ref === 'object' && ref.current) {
  //     const { width, height } = ref.current.getBoundingClientRect()
  //
  //     console.log()
  //     setChildrenRects({ width, height })
  //   }
  // }, [])

  return (
    <div
      // style={{ ...childrenRects }}
      className={cn(cns.Skeleton, { [cns.isLoading]: !!isLoading })}
    >
      <div className={cn(cns.children)}>{children}</div>
    </div>
  )
}

export default forwardRef(Skeleton)

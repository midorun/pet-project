import React, {
  FC,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
  useRef,
} from 'react'

import { t } from 'i18next'

import cn from 'shared/lib/cn'
import useIsFirstRender from 'shared/lib/hooks/useIsFirstRender'
import Button from 'shared/ui/button/Button'

type ModalProps = {
  isOpen: boolean
  onClose?: () => void
}

const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { isOpen, onClose, children } = props

  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogContentRef = useRef<HTMLDivElement>(null)

  const isFirstRender = useIsFirstRender()

  useEffect(() => {
    if (isOpen) {
      open()
    }

    if (!(isFirstRender || isOpen)) {
      close()
    }
  }, [isOpen])

  const open = () => {
    dialogRef.current?.showModal()
  }

  const close = () => {
    onClose?.()

    const dialog = dialogRef.current

    dialog?.addEventListener(
      'animationend',
      () => {
        dialog.close()
      },
      { once: true }
    )
  }

  const dialogClick = (e: SyntheticEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      console.log('close')
      close()
    }

    if (e.target === dialogContentRef.current) {
      console.log('content click')
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <dialog
      className={cn('modal', {
        ['modal_hide']: !isOpen,
        ['modal_open']: isOpen,
      })}
      ref={dialogRef}
      onClick={(e) => {
        e.stopPropagation()
        dialogClick(e)
      }}
    >
      <div
        ref={dialogContentRef}
        className={'content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      <Button onClick={close}>{t('close-modal')}</Button>
    </dialog>
  )
}

export default Modal

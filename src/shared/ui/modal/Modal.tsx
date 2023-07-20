import React, {
  FC,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
  useRef,
} from 'react'

import { t } from 'i18next'

import cn from 'shared/lib/cn'
import Button from 'shared/ui/button/Button'

import cns from './Modal.module.scss'

type ModalProps = {
  isOpen: boolean
  onClose?: () => void
}

const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { isOpen, onClose, children } = props

  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      open()
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
      close()
    }

    if (e.target === dialogContentRef.current) {
      console.log('content click')
    }
  }

  return (
    <dialog
      className={cn(cns.modal, {
        [cns.modalhide]: !isOpen,
        [cns.modalopen]: isOpen,
      })}
      ref={dialogRef}
      onClick={dialogClick}
    >
      <div
        ref={dialogContentRef}
        className={cns.content}
      >
        {children}
      </div>
      <Button onClick={close}>{t('close-modal')}</Button>
    </dialog>
  )
}

export default Modal

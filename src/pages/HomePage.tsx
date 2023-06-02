import React, { FC, SyntheticEvent, useEffect, useRef } from 'react'

import { useTranslation } from 'react-i18next'

const HomePage: FC = () => {
  const { t } = useTranslation()

  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogContentRef = useRef<HTMLDivElement>(null)

  const openModal = (e: SyntheticEvent<HTMLButtonElement>) => {
    dialogRef.current?.showModal()
  }

  const closeModal = () => {
    dialogRef.current?.close()
  }

  const dialogClickHandler = (e: SyntheticEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeModal()
    }

    if (e.target === dialogContentRef.current) {
      console.log('content click')
    }
  }

  useEffect(() => {
    window.addEventListener('click', (e) => {
      console.log(e.target)
    })
  }, [])

  return (
    <div>
      <h1>{t('home')}</h1>

      {/* <button */}
      {/*  id={'open'} */}
      {/*  onClick={openModal} */}
      {/* > */}
      {/*  Open dialog */}
      {/* </button> */}

      {/* <dialog */}
      {/*  ref={dialogRef} */}
      {/*  id={'dialog'} */}
      {/*  onClick={dialogClickHandler} */}
      {/* > */}
      {/*  <div */}
      {/*    id={'dialog-content'} */}
      {/*    ref={dialogContentRef} */}
      {/*  > */}
      {/*    Dialog */}
      {/*  </div> */}
      {/*  <button */}
      {/*    id={'close'} */}
      {/*    onClick={closeModal} */}
      {/*  > */}
      {/*    Close dialog */}
      {/*  </button> */}
      {/* </dialog> */}
    </div>
  )
}

export default HomePage

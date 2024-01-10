import * as React from 'react'
import { FC, PropsWithChildren } from 'react'

import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Sheet from '@mui/joy/Sheet'

type Props = {
  isOpen: boolean
  onClose?: () => void
}

const BasicModal: FC<PropsWithChildren<Props>> = (props) => {
  const { children, isOpen, onClose } = props

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={isOpen}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
        }}
      >
        <ModalClose
          variant="plain"
          sx={{ m: 1 }}
        />
        {children}
      </Sheet>
    </Modal>
  )
}

export default BasicModal

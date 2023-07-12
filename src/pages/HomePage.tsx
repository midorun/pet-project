import React, { FC, useState } from 'react'

import { useTranslation } from 'react-i18next'

import Modal from 'shared/ui/modal/Modal'

const HomePage: FC = () => {
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <h1>{t('home')}</h1>

      <button
        id={'open'}
        onClick={openModal}
      >
        Open dialog
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad
        animi dicta dolorum exercitationem fuga fugiat, ipsum magni nam nulla
        officiis omnis porro quas repellendus soluta voluptatem voluptatum.
        Temporibus!
      </Modal>
    </div>
  )
}

export default HomePage

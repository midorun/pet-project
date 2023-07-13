import React, { FC, useState } from 'react'

import { useTranslation } from 'react-i18next'

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
    </div>
  )
}

export default HomePage

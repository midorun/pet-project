import React, { FC, PropsWithChildren } from 'react'

import {
  CardOverflow,
  AspectRatio,
  CardContent,
  Typography,
  Card,
} from '@mui/joy'
import { useTranslation } from 'react-i18next'

import Loader from 'shared/ui/DEPRECATED/loader/Loader'

import { useGetCurrentUser } from '../../api/useGetCurrentUser'

const UserProfileCard: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const { t } = useTranslation()

  const { data, isLoading, isError } = useGetCurrentUser()

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <span>{t('Ошибка сервера')}</span>
  }

  const { id, address, company, ...fields } = data

  // return (
  //   <Card className={'flex flex-col space-y-1'}>
  //     <div className={'flex'}>
  //       <span>{t('username')}:</span>
  //       <span>{fields.username}</span>
  //     </div>
  //     <div className={'flex'}>
  //       <span>{t('email')}:</span>
  //       <span>{fields.email}</span>
  //     </div>
  //     <div className={'flex'}>
  //       <span>{t('phone')}:</span>
  //       <span>{fields.phone}</span>
  //     </div>
  //     <div className={'flex'}>
  //       <span>{t('website')}:</span>
  //       <span>{fields.website}</span>
  //     </div>

  //     {children}
  //   </Card>
  // )

  return (
    <Card
      variant="outlined"
      sx={{ width: 320 }}
    >
      <CardOverflow>
        <AspectRatio ratio="1.5">
          <img
            className=""
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-sm">
          {t('username')} : {fields.username}
        </Typography>
        <Typography level="body-sm">
          {t('email')} : {fields.email}
        </Typography>
        <Typography level="body-sm">
          {t('phone')} : {fields.phone}
        </Typography>
        <Typography level="body-sm">
          {t('website')} : {fields.website}
        </Typography>
      </CardContent>
      {/* <CardOverflow
        variant="soft"
        sx={{ bgcolor: 'background.level1' }}
      >
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            6.3k views
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow> */}
    </Card>
  )
}

export default UserProfileCard

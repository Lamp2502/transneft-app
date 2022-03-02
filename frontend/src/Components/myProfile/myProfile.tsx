import React from 'react'
import style from './MyProfile.module.scss'
import Avatar from '@mui/material/Avatar'
import editButtonIcon from '@assets/editButtonIcon.svg'
import { user } from '@utils/mock'

export const MyProfile: React.FC = () => {
  return (
    <div className={style.myProfile}>
      <div className={style.dashboard}>
        <div className={style.content}>
          <Avatar alt='' src='' sx={{ width: 125, height: 125 }} />
          <div className={style.profileInfo}>
            <div>{user.name}</div>
            <div>{user.position}</div>
            <div>{user.workPlace}</div>
          </div>
        </div>
        <div className={style.profileForm}>
          <div>
            <input className={style.inputForm} placeholder='Номер телефона:' />
            <img src={editButtonIcon} alt='editButtonIcon' />
          </div>
          <div>
            <input className={style.inputForm} placeholder='E-mail:' />
            <img src={editButtonIcon} alt='editButtonIcon' />
          </div>
          <div>
            <input className={style.inputForm} placeholder='Рабочий телефон:' />
            <img src={editButtonIcon} alt='editButtonIcon' />
          </div>
          <div>
            <input className={style.inputForm} placeholder='Логин:' />
          </div>
          <div>
            <input className={style.inputForm} placeholder='Пароль:' />
            <img src={editButtonIcon} alt='editButtonIcon' />
          </div>
        </div>
      </div>
    </div>
  )
}

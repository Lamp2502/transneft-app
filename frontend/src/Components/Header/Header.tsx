import React from 'react'
import style from './Header.module.scss'
import Avatar from '@mui/material/Avatar'
import headerSettingsIcon from '@assets/headerSettingsIcon.svg'
import { NavLink } from 'react-router-dom'
import { MAIN_PATH } from '@utils/constants'
import { user } from '@utils/mock'

export const Header: React.FC = () => {
  return (
    <div className={style.headerComponents}>
      <div className={style.info}>
        <div>{user.workPlace}</div>
      </div>
      <div className={style.headerProfileInfo}>
        <div>{user.name}</div>
        <div>{user.position}</div>
      </div>
      <div className={style.avatar}>
        <img src={headerSettingsIcon} alt='' />
        <NavLink to={MAIN_PATH}>
          <Avatar alt='' src='' sx={{ width: 56, height: 56 }} />
        </NavLink>
      </div>
    </div>
  )
}
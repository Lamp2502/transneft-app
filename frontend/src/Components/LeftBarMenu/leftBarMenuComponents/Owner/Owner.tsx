import React, { useCallback } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import style from './Owner.module.scss'
import settingsIcon from '@assets/settingsIcon.svg'
import arrowLeft from '@assets/arrowLeft.svg'
import findIcon from '@assets/findIcon.svg'
import { OwnerProperties } from './OwnerProperties/OwnerProperties'
import { ReactComponent as StatusIconTrue } from '@assets/statusIconTrue.svg'
import { ReactComponent as StatusIconFalse } from '@assets/statusIconFalse.svg'
import {
  OWNER_HISTORY_PATH,
  OWNER_LINK_PATH,
  OWNER_PATH,
  TASK_LINK_PATH,
} from '@utils/constants'
import { Settings } from './Settings/Settings'
import { useState } from 'react'

type OwnerProps = {
  status: boolean
  setStatus: (arg: boolean) => void
}

export const Owner: React.FC<OwnerProps> = ({ status, setStatus }) => {
  const settingsValue = ['Атрибуты документа', 'Собственники', 'Файлы', 'Замечания']
  const [openSettings, setOpenSettings] = useState(false)
  const [checkbox, setCheckbox] = useState<boolean[]>(new Array(settingsValue.length).fill(true))

  const handleOpenSettings = useCallback(() => {
    setOpenSettings(true)
  }, [])

  const handleCloseSettings = useCallback(() => {
    setOpenSettings(false)
  }, [])

  return (
    <div className={style.component}>
      <div className={style.header}>
        <div className={style.title}>
          <div className={style.subTitle}>
            <NavLink to={TASK_LINK_PATH}>
              <img className={style.icon} src={arrowLeft} alt='icon' />
            </NavLink>
            <h2>Сведения о цепочке собственников</h2>
          </div>
          {status ? (
            <div className={style.status}>
              <StatusIconTrue />
              <p>Ознакомлен</p>
            </div>
          ) : (
            <div className={style.status}>
              <StatusIconFalse />
              <p>Ознакомление</p>
            </div>
          )}
        </div>
        <div className={style.panelTabs}>
          <nav className={style.tabs}>
            <li className={style.item}>
              <NavLink
                exact
                className={style.link}
                activeClassName={style.active}
                to={OWNER_PATH}
              >
                Свойства
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                className={style.link}
                activeClassName={style.active}
                to={OWNER_LINK_PATH}
              >
                Связи
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                className={style.link}
                activeClassName={style.active}
                to={OWNER_HISTORY_PATH}
              >
                История документа
              </NavLink>
            </li>
          </nav>
          <div className={style.control}>
            <button className={style.controlIcon}>
              <img src={findIcon} alt='icon' />
            </button>
            <button className={style.controlIcon} onClick={handleOpenSettings}>
              <img src={settingsIcon} alt='icon' />
            </button>
            {openSettings && (
              <Settings
                setOpenSettings={handleCloseSettings}
                setCheckbox={setCheckbox}
                checkbox={checkbox}
                settingsValue={settingsValue}
              />
            )}
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={OWNER_PATH}>
          <OwnerProperties checkbox={checkbox} setStatus={setStatus} />
        </Route>
        <Route path={OWNER_LINK_PATH}>
          <div>Link</div>
        </Route>
        <Route path={OWNER_HISTORY_PATH}>
          <div>History</div>
        </Route>
      </Switch>
    </div>
  )
}

import React, { useCallback } from 'react'
import { Switch, Route, NavLink, useHistory } from 'react-router-dom'
import style from './Task.module.scss'
import settingsIcon from '@assets/settingsIcon.svg'
import arrowLeft from '@assets/arrowLeft.svg'
import findIcon from '@assets/findIcon.svg'
import { TaskProperties } from './TaskProperties/TaskProperties'
import { Link } from './Link/Link'
import { ReactComponent as StatusIconTrue } from '@assets/statusIconTrue.svg'
import { ReactComponent as StatusIconFalse } from '@assets/statusIconFalse.svg'
import { TASKS_PATH, TASK_HISTORY_PATH, TASK_LINK_PATH, TASK_PATH } from '@utils/constants'
import { Settings } from './Settings/Settings'
import { useState } from 'react'

type TaskProps = {
  status: boolean
  setStatus: (arg: boolean) => void
}

export const Task: React.FC<TaskProps> = ({ status, setStatus }) => {
  const settingsValue = ['Атрибуты документа', 'Путь документа', 'Замечания', 'Таблица', 'Файлы']
  const [openSettings, setOpenSettings] = useState(false)
  const [checkbox, setCheckbox] = useState<boolean[]>(new Array(settingsValue.length).fill(true))

  const history = useHistory()

  const handleOpenSettings = useCallback(() => {
    setOpenSettings(true)
  }, [openSettings])

  const handleCloseSettings = useCallback(() => {
      setOpenSettings(false)
    }, [openSettings],
  )

  return (
    <div className={style.component}>
      <div className={style.header}>
        <div className={style.title}>
          <div className={style.subTitle}>
            <button className={style.arrowLeft} onClick={() => history.go(-1)}>
              <img className={style.icon} src={arrowLeft} alt='icon' />
            </button>
            <h2>Договор на поставку МТР №ПАО-87-2021</h2>
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
              <NavLink exact className={style.link} activeClassName={style.active} to={TASK_PATH}>
                Свойства
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink className={style.link} activeClassName={style.active} to={TASK_LINK_PATH}>
                Связи
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink className={style.link} activeClassName={style.active} to={TASK_HISTORY_PATH}>
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
        <Route exact path={TASK_PATH}>
          <TaskProperties checkbox={checkbox}
                          setStatus={setStatus}

          />
        </Route>
        <Route path={TASK_LINK_PATH}>
          <Link />
        </Route>
        <Route path={TASK_HISTORY_PATH}>
          <div>History</div>
        </Route>
      </Switch>
    </div>
  )
}
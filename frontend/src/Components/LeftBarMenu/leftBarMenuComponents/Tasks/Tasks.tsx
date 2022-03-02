import React from 'react'
import { useState } from 'react'
import style from './Tasks.module.scss'
import settingsIcon from '@assets/settingsIcon.svg'
import findIcon from '@assets/findIcon.svg'
import { Do } from './part/do'
import { Complete } from './part/complete'
import cn from 'classnames'

export const tasksValue = [
  { id: 1, name: 'Дата постановки' },
  { id: 2, name: 'Выполнить до' },
  { id: 3, name: 'Тип задачи' },
  { id: 4, name: 'Документ' },
  { id: 5, name: 'Контрагент' },
  { id: 6, name: 'Администратор' },
  { id: 7, name: 'Действия' },
]

export const Tasks: React.FC = () => {
  const [button, setButton] = useState([true, false])
  return (
    <div className={style.component}>
      <div className={style.header}>
        <h2>Задачи</h2>
        <div className={style.panelTabs}>
          <nav className={style.tabs}>
            <li className={style.item}>
              <button
                className={cn(style.link, button[0] && style.active)}
                onClick={() => setButton([true, false])}
              >
                К выполнению
              </button>
            </li>
            <li className={style.item}>
              <button
                className={cn(style.link, button[1] && style.active)}
                onClick={() => setButton([false, true])}
              >
                Завершенные
              </button>
            </li>
          </nav>
          <div className={style.control}>
            <button className={style.controlIcon}>
              <img src={findIcon} alt='icon' />
            </button>
            <button className={style.controlIcon}>
              <img src={settingsIcon} alt='icon' />
            </button>
          </div>
        </div>
      </div>
      {button[0] && <Do />}
      {button[1] && <Complete />}
    </div>
  )
}
import style from './TasksComplete.module.scss'
import { tasksComplete } from '@utils/mock'
import { Link } from 'react-router-dom'
import { TASK_PATH } from '@utils/constants'
import React from 'react'

const tasksValue = [
  { id: 1, name: 'Дата постановки' },
  { id: 2, name: 'Выполнить до' },
  { id: 3, name: 'Тип задачи' },
  { id: 4, name: 'Документ' },
  { id: 5, name: 'Контрагент' },
  { id: 6, name: 'Администратор' },
]
export const Complete: React.FC = () => {
  return (
    <div className={style.main}>
      <ul className={style.table}>
        <ul className={style.headerTable}>
          {tasksValue.map((item) => (
            <li key={item.id} className={style.item}>
              {item.name}
            </li>
          ))}
        </ul>
        {tasksComplete.map((item) => (
          <ul key={item.id} className={style.rowTable}>
            <li className={style.item}>{item.dataOpen}</li>
            <li className={style.item}>{item.dataClose}</li>
            <li className={style.item}>{item.typeTask}</li>
            <li className={style.item}>
              <Link className={style.link} to={TASK_PATH}>
                {item.document}
              </Link>
            </li>
            <li className={style.item}>{item.company}</li>
            <li className={style.item}>{item.administrator}</li>
          </ul>
        ))}
      </ul>
    </div>
  )
}
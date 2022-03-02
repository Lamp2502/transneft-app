import style from './TasksDo.module.scss'
import { tasksDo } from '@utils/mock'
import { Link } from 'react-router-dom'
import { tasksValue } from '../Tasks'
import { TASK_PATH } from '@utils/constants'
import React from 'react'

export const Do: React.FC = () => {
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
        {tasksDo.map((item) => (
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
            <li className={style.item}>
              <button className={style.button}>{item.action}</button>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  )
}
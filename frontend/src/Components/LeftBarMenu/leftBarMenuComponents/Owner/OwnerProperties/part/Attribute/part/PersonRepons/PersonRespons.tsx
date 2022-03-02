import React from 'react'
import style from '../../../../OwnerProperties.module.scss'
import { personResponse } from '@utils/mock'
import cn from 'classnames'

export const PersonRespons: React.FC = () => {
  const personValue = ['Организация', 'Роль', 'ФИО']
  return (
    <div className={style.componentPerson}>
      <ul className={style.header}>
        {personValue.map((item, index) => (
          <li key={index} className={style.item}>
            {item}
          </li>
        ))}
      </ul>
      {personResponse.map((item, index) => (
        <ul key={item.id} className={cn(style.row, index % 2 === 0 && style.rowOdd)}>
          <li className={style.item}>{item.company}</li>
          <li className={style.item}>{item.rule}</li>
          <li className={style.item}>{item.name}</li>
        </ul>
      ))}
    </div>
  )
}
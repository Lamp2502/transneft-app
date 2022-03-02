import React from 'react'
import style from '../../SpecProperties.module.scss'
import cn from 'classnames'
import vectorDownIcon from '@assets/vectorDownIcon.svg'

export const SpecBlock: React.FC = () => {
  const specValue = [
    { id: 1, name: '№' },
    { id: 2, name: 'PID' },
    { id: 3, name: 'Код позиции' },
    { id: 4, name: 'Наименование продукции' },
    { id: 5, name: 'ГОСТ, ОСТ, ТУ...' },
    { id: 6, name: 'Ед. изм' },
    { id: 7, name: 'Кол-во, всего' },
    { id: 8, name: 'Цена, без НДС' },
    { id: 9, name: 'Сумма, без НДС' },
  ]
  return (
    <div className={style.mainBlock}>
      <div className={cn(style.title, style.titleOne)}>
        <p>Спецификация</p>
        <img className={style.iconOne} src={vectorDownIcon} alt='icon' />
      </div>
      <div className={style.table}>
        <ul className={cn(style.rowTable, style.rowTableHeader)}>
          {specValue.map((item) => (
            <li key={item.id} className={style.item}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

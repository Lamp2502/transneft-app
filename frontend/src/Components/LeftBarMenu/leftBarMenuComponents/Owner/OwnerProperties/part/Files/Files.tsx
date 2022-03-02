import React from 'react'
import style from '../../OwnerProperties.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import vectorDownIcon from '@assets/vectorDownIcon.svg'
import { files } from '@utils/mock'

export const Files: React.FC = () => {
  const fileValue = [
    { id: 1, name: 'Дата загрузки' },
    { id: 2, name: 'Имя файла' },
    { id: 3, name: 'Загрузил' },
  ]
  return (
    <div className={style.mainBlock}>
      <div className={cn(style.title, style.titleOne)}>
        <p>Файлы</p>
        <img className={style.iconOne} src={vectorDownIcon} alt='icon' />
      </div>
      <div className={style.table}>
        <ul className={cn(style.rowTable, style.rowTableHeader)}>
          {fileValue.map((item) => (
            <li key={item.id} className={style.item}>
              {item.name}
            </li>
          ))}
        </ul>
        {files.map((item) => (
          <ul key={item.id} className={style.rowTable}>
            <li className={style.item}>{item.dataLoad}</li>
            <li className={style.item}>
              <Link className={style.link} to='/'>
                {item.name}
              </Link>
            </li>
            <li className={style.item}>{item.loader}</li>
          </ul>
        ))}
        <button className={style.buttonFooter}>Добавить</button>
      </div>
    </div>
  )
}
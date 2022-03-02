import React from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import style from './Link.module.scss'
import folderIcon from '@assets/folderIcon.svg'
import downloadIcon from '@assets/downloadIcon.svg'
import { taskLinks as data } from '@utils/mock'

export const Link: React.FC = () => {
  return (
    <div className={style.main}>
      <ul className={style.table}>
        {data.map((item, index) => (
          <ul key={index} className={style.row}>
            {item.map((el, index) =>
              index < item.length - 1 ? (
                el.id !== 3 ? (
                  <li key={el.id} className={style.item}>
                    <span>{el.title}</span>
                    <p>{el.name}</p>
                  </li>
                ) : (
                  <li key={el.id} className={style.item}>
                    <span>{el.title}</span>
                    <LinkRoute to='/'>
                      <p>{el.name}</p>
                    </LinkRoute>
                  </li>
                )
              ) : (
                <li key={el.id} className={style.item}>
                  <img className={style.icon} src={folderIcon} alt='icon' />
                  <img className={style.icon} src={downloadIcon} alt='icon' />
                </li>
              ),
            )}
          </ul>
        ))}
      </ul>
    </div>
  )
}

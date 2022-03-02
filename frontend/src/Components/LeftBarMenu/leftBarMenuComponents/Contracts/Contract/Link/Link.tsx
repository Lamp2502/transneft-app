import React from 'react'
import style from './Link.module.scss'
import folderIcon from '@assets/folderIcon.svg'
import downloadIcon from '@assets/downloadIcon.svg'
import {contractLinks as data} from '@utils/mock'

export const Link: React.FC = () => {
    return (
        <div className={style.main}>
            <ul className={style.table}>
                {data.map((item, index) => (
                    <ul key={index} className={style.row}>
                        {item.map((el, index) =>
                            index < item.length - 1 ? (
                                <li key={el.id} className={style.item}>
                                    <span>{el.title}</span>
                                    <p>{el.name}</p>
                                </li>
                            ) : (
                                <li key={el.id} className={style.item}>
                                    <img className={style.icon} src={folderIcon} alt='icon'/>
                                    <img className={style.icon} src={downloadIcon} alt='icon'/>
                                </li>
                            ),
                        )}
                    </ul>
                ))}
            </ul>
        </div>
    )
}

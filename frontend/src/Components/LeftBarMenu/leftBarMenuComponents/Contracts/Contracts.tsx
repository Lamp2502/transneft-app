import React, {useCallback} from 'react'
import {useState} from 'react'
import style from './Contracts.module.scss'
import {Link} from 'react-router-dom'
import settingsIcon from '@assets/settingsIcon.svg'
import findIcon from '@assets/findIcon.svg'
import cn from 'classnames'
import {CONTRACT_PATH} from '@utils/constants'
import {contracts as initialContracts} from '@utils/mock'

const contractsValue = [
    {id: 1, name: 'Дата документа'},
    {id: 2, name: 'Наименование'},
    {id: 3, name: 'Организация (Заказчик)'},
    {id: 4, name: 'Исполнитель (Поставщик)'},
]

export const Contracts: React.FC = () => {
    const [contracts, setContracts] = useState(initialContracts)
    const [buttons, setButtons] = useState([true, false, false])

    const handleClick = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
        switch (evt.currentTarget.dataset.btn) {
            case 'all':
                setButtons([true, false, false])
                setContracts(initialContracts)
                break
            case 'notCompleted':
                setButtons([false, true, false])
                setContracts(initialContracts.filter((item) => item.completed !== true))
                break
            case 'completed':
                setButtons([false, false, true])
                setContracts(initialContracts.filter((item) => item.completed === true))
                break
        }
    }, [contracts, buttons])


    return (
        <div className={style.component}>
            <div className={style.header}>
                <h2>Договоры</h2>
                <div className={style.panelTabs}>
                    <nav className={style.tabs}>
                        <li className={cn(style.item, [buttons[0] && style.active])}>
                            <button
                                className={cn(style.link, [buttons[0] && style.active])}
                                data-btn='all'
                                onClick={handleClick}
                            >
                                Все
                            </button>
                        </li>
                        <li className={cn(style.item, [buttons[1] && style.active])}>
                            <button
                                className={cn(style.link, [buttons[1] && style.active])}
                                data-btn='notCompleted'
                                onClick={handleClick}
                            >
                                Действующие
                            </button>
                        </li>
                        <li className={cn(style.item, [buttons[2] && style.active])}>
                            <button
                                className={cn(style.link, [buttons[2] && style.active])}
                                data-btn='completed'
                                onClick={handleClick}
                            >
                                Завершенные
                            </button>
                        </li>
                    </nav>
                    <div className={style.control}>
                        <button className={style.controlIcon}>
                            <img src={findIcon} alt='icon'/>
                        </button>
                        <button className={style.controlIcon}>
                            <img src={settingsIcon} alt='icon'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.table}>
                    <ul className={style.headerTable}>
                        {contractsValue.map((item) => (
                            <li key={item.id} className={style.item}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    {contracts.map((item) => (
                        <ul key={item.id} className={style.rowTable}>
                            <li className={cn(style.item, [item.completed && style.unActive])}>{item.data}</li>
                            <li className={style.item}>
                                <Link className={style.link} to={CONTRACT_PATH}>
                                    {item.name}
                                </Link>
                            </li>
                            <li className={cn(style.item, [item.completed && style.unActive])}>{item.company}</li>
                            <li className={cn(style.item, [item.completed && style.unActive])}>
                                {item.supplier}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import style from './ContactProperties.module.scss'
import noGrifIcon from '@assets/noGrifIcon.svg'
import vectorDownIcon from '@assets/vectorDownIcon.svg'
import {ReactComponent as FirstStage} from '@assets/bpm/first.svg'
import {ReactComponent as SecondStage} from '@assets/bpm/second.svg'
import {ReactComponent as ThirdStage} from '@assets/bpm/third.svg'
import {ReactComponent as FourthStage} from '@assets/bpm/fourth.svg'
import {ReactComponent as FifthStage} from '@assets/bpm/fifth.svg'
import cn from 'classnames'
import {Modal} from '../../../../../Modal/Modal'

type ContractProps = {
    setStatus: (arg: boolean) => void
}

export const ContractProperties: React.FC<ContractProps> = ({setStatus}) => {
    return (
        <div className={style.main}>
            <div className={style.area}>
                <div className={style.title}>
                    <p>Атрибуты документа</p>
                    <div className={style.grif}>
                        <img className={style.icon} src={noGrifIcon} alt='icon'/>
                        <p>Без грифа</p>
                    </div>
                </div>
                <div className={style.tabs}>
                    <button className={cn(style.item, style.active)}>Основные</button>
                    <button className={style.item}>Ответственные лица</button>
                </div>
                <div className={style.itemBlock}>
                    <div className={style.item240}>
                        <span>Дата подписания</span>
                        <p>20.10.2021</p>
                    </div>
                    <div className={style.item240}>
                        <span>Рег. № документа</span>
                        <p>ПАО-87-2021</p>
                    </div>
                    <div className={style.item500}>
                        <span>ОСТ</span>
                        <p>Средне-волжское акционерное общество трубопроводного транспорта нефтепродуктов</p>
                    </div>
                    <div className={style.itemBig500}>
                        <div className={style.row}>
                            <span>Тип договора</span>
                            <p>Спецификация (на след. месяц)</p>
                        </div>
                        <div className={style.row}>
                            <span>Класс договора</span>
                            <p>Технический договор</p>
                        </div>
                        <div className={style.row}>
                            <span>Типовая форма</span>
                            <p>Типовой</p>
                        </div>
                        <div className={style.row}>
                            <span>Вид договора СЭД</span>
                            <p>
                                Договор о проектировании, разработке, внедрении, эксплуатации, сопровождении
                                автоматизированных систем и программных продуктов
                            </p>
                        </div>
                        <div className={style.rowInp}>
                            <input type='checkbox'/>
                            <span>Рамочный договор</span>
                        </div>
                    </div>
                    <div className={style.item500}>
                        <span>Агент</span>
                        <p></p>
                    </div>
                    <div className={style.item500}>
                        <span>Контрагент</span>
                        <p>АО “Выксунский металлургический завод”</p>
                    </div>
                    <div className={style.item500}>
                        <span>ИНН</span>
                        <p>5247004695</p>
                    </div>
                </div>
                <div className={style.itemFull}>
                    <span>Предмет договора</span>
                    <div className={style.item}>
                        <p>Типовой ИТ-договор создания КИС ЛКК</p>
                    </div>
                </div>
                <div className={style.divider}></div>
                <div className={style.dateBlock}>
                    <div className={style.block}>
                        <span>Дата начала</span>
                        <div className={style.item}>
                            <p>20.10.2021</p>
                        </div>
                    </div>
                    <div className={style.block}>
                        <span>Дата окончания</span>
                        <div className={style.item}>
                            <p></p>
                        </div>
                    </div>
                    <div className={style.block}>
                        <span>Дата начала работы</span>
                        <div className={style.item}>
                            <p>20.10.2021</p>
                        </div>
                    </div>
                    <div className={style.block}>
                        <span>Дата окончания работы</span>
                        <div className={style.item}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={style.divider}></div>
                <div className={style.dateBlock}>
                    <div className={cn(style.block, style.terminate)}>
                        <span>Дата расторжения</span>
                        <div className={cn(style.item, style.terminate)}>
                            <p></p>
                        </div>
                    </div>
                    <div className={style.block}>
                        <span>Код расторжения</span>
                        <div className={style.item}>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.subArea}>
                <div className={style.title}>
                    <p>Путь документа</p>
                    <img className={style.icon} src={vectorDownIcon} alt='icon'/>
                </div>
                <div className={style.treeStage}>
                    <div className={style.branch}>
                        <FirstStage className={style.stage}/>
                        <p className={style.odd}>Загрузка в ЛКК</p>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.branch}>
                        <p className={style.even}>Назначение отв. лиц</p>
                        <SecondStage className={style.stage}/>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.branch}>
                        <ThirdStage className={style.activeStage}/>
                        <p className={cn(style.odd, style.active)}>Ознакомление</p>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.branch}>
                        <p className={style.even}>Действует</p>
                        <FourthStage className={style.stage}/>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.branch}>
                        <FifthStage className={style.stage}/>
                        <p className={style.odd}>Завершен</p>
                    </div>
                </div>
            </div>
            <Modal setStatus={setStatus}/>
        </div>
    )
}
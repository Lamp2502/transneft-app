import React, { useState, useRef } from 'react'
import style from './PlanContent.module.scss'
import cn from 'classnames'
import vectorDownIcon from '@assets/vectorDownIcon.svg'
import carretIcon from '@assets/carretIcon.svg'
import viewFullIcon from '@assets/viewFullIcon.svg'
import noViewFullIcon from '@assets/noViewFullIcon.svg'

import { ModalFull } from '@components/ModalFull/ModalFull'
import { planMTR } from '@utils/mock'

export const Plan: React.FC = () => {
  const itemInfoValue = [
    'Входной контроль основных комплектующих запорной арматуры',
    'Сварочные работы',
    'Сборка',
    'Приемо-сдаточные испытания продукции',
    'Нанесение антикоррозионного покрытия',
    'Упаковка перед отгрузкой',
    'Оформление сопроводительной документации',
  ]
  const [open, setOpen] = useState(false)
  const [openItem, setOpenItem] = useState<boolean[]>(new Array(planMTR.length).fill(false))
  const [openSubItem, setOpenSubItem] = useState<boolean[]>(new Array(planMTR.length).fill(false))

  const handleOpenFull = () => {
    setOpen(!open)
  }
  const handleOpenItem = (position: number) => {
    const updatedCheckedState = openItem.map((item, index) => (index === position ? !item : item))
    setOpenItem(updatedCheckedState)
  }
  const handleOpenSubItem = (position: number) => {
    const updatedCheckedState = openSubItem.map((item, index) =>
      index === position ? !item : item,
    )
    setOpenSubItem(updatedCheckedState)
  }
  const checkbox = useRef<HTMLInputElement | null>(null)

  return (
    <ModalFull open={open} setOpen={setOpen}>
      <div className={style.title}>
        <div className={style.titleBlock}>
          <p>План</p>
          <img className={style.iconOne} src={vectorDownIcon} alt='icon' />
        </div>
        <div className={style.buttonBlock}>
          <img className={style.icon} src={carretIcon} alt='icon' />
          <button className={style.buttonTrans} onClick={handleOpenFull}>
            {!open ? (
              <img className={style.icon} src={viewFullIcon} alt='icon' />
            ) : (
              <img className={style.icon} src={noViewFullIcon} alt='icon' />
            )}
          </button>
        </div>
      </div>
      <ul className={cn(style.table, open && style.tableOpen)}>
        {planMTR.map((item, index) => (
          <li key={item.id} className={style.row}>
            <div className={style.rowTitle}>
              <div className={style.roll}>{item.id}</div>
              <div className={style.pid}>{item.pid}</div>
              <input type='checkbox' id='checkbox1' name='svision' ref={checkbox} />
              <label htmlFor='checkbox1'>Поднадзорный</label>
              <input type='checkbox' id='checkbox2' name='delivery' ref={checkbox} />
              <label htmlFor='checkbox2'>Доставка ТНЛ</label>
            </div>
            <div className={cn(style.rowContent, open && style.rowContentOpen)}>
              <div className={style.name}>
                <p>{item.name}</p>
                <button className={style.iconDown} onClick={() => handleOpenItem(index)}>
                  <img
                    className={cn(openItem[index] && style.rotate)}
                    src={vectorDownIcon}
                    alt='icon'
                  />
                </button>
              </div>
              <div className={style.count}>
                <p>{item.count}</p>
                <span>шт.</span>
              </div>
              <div className={style.date}>
                <div className={style.block}>
                  <span>Начало производства</span>
                  <div className={style.item}>
                    <p>{item.dateBegin}</p>
                  </div>
                </div>
                <div className={style.block}>
                  <span>Готовность к отгрузке</span>
                  <div className={style.item}>
                    <p>{item.dateShipment}</p>
                  </div>
                </div>
              </div>
            </div>
            {openItem[index] &&
              item?.list?.map((item1, index1) => (
                <div key={item1.id} className={style.itemInfo}>
                  <div className={style.itemNumber}>
                    <p>Заводской номер</p>
                    <div className={style.itemNumberWin}>{item1.number}</div>
                  </div>
                  <div className={style.itemList}>
                    <p>Ход изготовления и входной контроль</p>
                    <button className={style.iconDown} onClick={() => handleOpenSubItem(index1)}>
                      <img
                        className={cn(openSubItem[index1] && style.rotate)}
                        src={vectorDownIcon}
                        alt='icon'
                      />
                    </button>
                  </div>
                  {openSubItem[index1] &&
                    item1?.data?.map((item2, index2) => (
                      <div key={index2} className={style.itemInfo}>
                        <div className={style.itemNumber}>
                          <p>{itemInfoValue[index2]}</p>
                          <p>{item2}</p>
                        </div>
                        <p></p>
                      </div>
                    ))}
                </div>
              ))}
          </li>
        ))}
      </ul>
    </ModalFull>
  )
}

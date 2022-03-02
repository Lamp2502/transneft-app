import React, { useState } from 'react'
import style from './OwnerBlock.module.scss'
import cn from 'classnames'
import vectorDownIcon from '@assets/vectorDownIcon.svg'
import carretIcon from '@assets/carretIcon.svg'
import viewFullIcon from '@assets/viewFullIcon.svg'
import noViewFullIcon from '@assets/noViewFullIcon.svg'

import { ModalFull } from '@components/ModalFull/ModalFull'

export const OwnerBlock: React.FC = () => {
  const [open, setOpen] = useState(false)
  const ownerValue = [
    { id: 1, name: '№' },
    { id: 2, name: 'Роль' },
    { id: 3, name: 'Код АСУ Закупки' },
    { id: 4, name: 'Наименование/ФИО' },
    { id: 5, name: 'ИНН' },
    { id: 6, name: 'ОГРН(ИП)' },
    { id: 7, name: 'Адрес регистрации' },
    { id: 8, name: 'Цена, без НДС' },
    { id: 9, name: 'Сумма, без НДС' },
  ]
  const handleOpenFull = () => {
    setOpen(!open)
  }
  return (
    <ModalFull open={open} setOpen={setOpen}>
      <div className={style.title}>
        <div className={style.titleBlock}><p>Собственники</p>
          <img className={style.iconOne} src={vectorDownIcon} alt='icon' />
        </div>
        <div className={style.buttonBlock}>
          <img className={style.icon} src={carretIcon} alt='icon' />
          <button className={style.buttonTrans} onClick={handleOpenFull}>
            {!open ? <img className={style.icon} src={viewFullIcon} alt='icon' /> :
              <img className={style.icon} src={noViewFullIcon} alt='icon' />}
          </button>
        </div>
      </div>
      <div className={cn(style.table, open && style.tableOpen)}>
        <ul className={cn(style.rowTable, style.rowTableHeader)}>
          {ownerValue.map((item) => (
            <li key={item.id} className={style.item}>
              {item.name}
            </li>
          ))}
        </ul>
        {!open && <button className={style.button}>Добавить</button>}
      </div>
    </ModalFull>
  )
}

import React from 'react'
import style from '../../../../OwnerProperties.module.scss'

export const Basic: React.FC = () => {
  return (
    <>
      <div className={style.itemBlock}>
        <div className={style.item240}>
          <span>Дата подписания</span>
          <p>20.10.2021</p>
        </div>
        <div className={style.item240}>
          <span>Рег. № документа</span>
          <p>ПАО-87-2021</p>
        </div>

        <div className={style.itemBig500}>
          <div className={style.row}>
            <span>Договор</span>
            <p className={style.link}>№ПАО-87-2021 от 20.10.2021</p>
          </div>

        </div>

        <div className={style.item500}>
          <span>Контрагент</span>
          <p className={style.min}>АО “Выксунский металлургический завод”</p>
        </div>
        <div className={style.item500wide}>
          <span>ИНН</span>
          <p className={style.min}>5247004695</p>
        </div>
      </div>
    </>
  )
}

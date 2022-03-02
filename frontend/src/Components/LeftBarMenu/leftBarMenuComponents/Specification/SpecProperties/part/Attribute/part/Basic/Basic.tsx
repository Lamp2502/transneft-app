import React from 'react'
import style from '../../../../SpecProperties.module.scss'

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
        <div className={style.item500}>
          <span>ОСТ</span>
          <p className={style.min}>
            Средне-волжское акционерное общество трубопроводного транспорта нефтепродуктов
          </p>
        </div>
        <div className={style.itemBig500}>
          <div className={style.row}>
            <span>Доп.соглашение</span>
            <p className={style.link}>№ДС-ПАО-88 от 20.10.2021</p>
          </div>
          <div className={style.row}>
            <span>Договор</span>
            <p className={style.link}>№ПАО-87-2021 от 20.10.2021</p>
          </div>
          <div className={style.row}>
            <span>Объект</span>
            <p>Строительная площадка</p>
          </div>
        </div>
        <div className={style.item500}>
          <span>Агент</span>
          <p></p>
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
      <div className={style.itemFull}>
        <div className={style.item}>
          <p>Сумма без НДС</p>
          <p>Сумма НДС</p>
          <p>Итого с НДС</p>
        </div>
      </div>
    </>
  )
}

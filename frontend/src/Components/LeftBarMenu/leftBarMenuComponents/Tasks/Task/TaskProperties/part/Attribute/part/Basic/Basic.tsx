import React from 'react'
import style from '../../../../TaskProperties.module.scss'
import cn from 'classnames'

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
            <input type='checkbox' />
            <span>Рамочный договор</span>
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
    </>
  )
}
import React, { useCallback } from 'react'
import { useState } from 'react'
import style from '../../OwnerProperties.module.scss'
import cn from 'classnames'
import noGrifIcon from '@assets/noGrifIcon.svg'
import { Basic } from './part/Basic/Basic'
import { PersonRespons } from './part/PersonRepons/PersonRespons'

export const Attribute: React.FC = () => {
  const [buttons, setButtons] = useState([true, false])

  const handleClick = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      switch (evt.currentTarget.dataset.btn) {
        case 'basic':
          setButtons([true, false])
          break
        case 'person':
          setButtons([false, true])
          break
      }
    },
    [buttons],
  )

  return (
    <div className={style.mainBlock}>
      <div className={style.title}>
        <p>Атрибуты документа</p>
        <div className={style.grif}>
          <img className={style.icon} src={noGrifIcon} alt='icon' />
          <p>Без грифа</p>
        </div>
      </div>
      <div className={style.tabs}>
        <button
          className={cn(style.item, [buttons[0] && style.active])}
          data-btn='basic'
          onClick={handleClick}
        >
          Основные
        </button>
        <button
          className={cn(style.item, [buttons[1] && style.active])}
          data-btn='person'
          onClick={handleClick}
        >
          Ответственные лица
        </button>
      </div>
      {buttons[0] && <Basic />}
      {/* {buttons[1] && <PersonRespons />} */}
    </div>
  )
}

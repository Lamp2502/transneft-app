import React, {useCallback} from 'react'
import style from './Settings.module.scss'
import arrowLeft from '@assets/arrowLeft.svg'
import arrowDown from '@assets/arrowDown.svg'
import fillArrowUp from '@assets/fillArrowUp.svg'
import fillArrowDown from '@assets/fillArrowDown.svg'
import {AVAILABLE_FIELDS} from '@utils/constants'
import {SORT_FIELDS} from '@utils/constants'
import {GROUP_FIELDS} from '@utils/constants'
import {DOCUMENTS_PATH} from '@utils/constants'
import {NavLink} from 'react-router-dom'
import leftVector from '@assets/leftVector.svg'
import rightVector from '@assets/rightVector.svg'
import cn from 'classnames'
import {useState} from 'react'

type ValuesProps = {
  available: boolean[]
  // reliase: boolean[]
  sort: boolean[]
  group: boolean[]
}
export const Settings: React.FC = () => {
  const initValues = {
    sort: new Array(SORT_FIELDS.length).fill(false),
    group: new Array(GROUP_FIELDS.length).fill(false),
    available: new Array(AVAILABLE_FIELDS.length).fill(false),
  }
  const [values, setValues] = useState<ValuesProps>(initValues)
  const [reset, setReset] = useState(false)

  const handleCheckbox = useCallback((evt: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const name = evt.target.name
    const updatedCheckedState = values[name as keyof typeof values].map((item, index) =>
      index === position ? !item : item,
    )
    setValues((prev) => ({...prev, [name as keyof typeof values]: updatedCheckedState}))
  }, [values])

  const handleClickApply = useCallback(() => {
    setReset(true)
  }, [reset])

  const handleClickReset = useCallback(() => {
    setValues(initValues)
    setReset(false)
  }, [values, reset])


  return (
    <div className={style.component}>
      <div className={style.header}>
        <div className={style.title}>
          <NavLink to={DOCUMENTS_PATH}>
            <img className={style.icon} src={arrowLeft} alt='icon'/>
          </NavLink>
          <h2>Настройка документов</h2>
        </div>
        <div className={style.footer}>
          <img className={style.icon} src={arrowDown} alt='icon'/>
          <button className={style.button}>Сохранить</button>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.modal}>
          <div className={style.title}>
            <p>Вид</p>
            <div className={style.blockList}>
              <label htmlFor='list1'>
                <input name='list' type='radio' id='list1' value='list1' defaultChecked/>
                Список
              </label>
              <label htmlFor='list2'>
                <input name='list' type='radio' id='list2' value='list2'/>
                Структурированный список
              </label>
            </div>
          </div>
          <div className={style.container}>
            <div className={style.block}>
              <p>Доступные поля</p>
              <ul className={style.column}>
                {AVAILABLE_FIELDS.map((item, index) => (
                  <li key={index} className={style.row}>
                    <input
                      type='checkbox'
                      id={`checkbox${item}`}
                      name='available'
                      checked={values.available[index]}
                      onChange={(evt) => handleCheckbox(evt, index)}
                    />
                    <label htmlFor={`checkbox${item}`}>{item}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.mix}>
              <div className={style.divider}></div>
              <div className={style.buttonBlock}>
                <button className={style.button}>
                  <img src={leftVector} alt='icon'/>
                </button>
                <button className={style.button}>
                  <img src={rightVector} alt='icon'/>
                </button>
              </div>
              <div className={cn(style.divider, style.dividerBottom)}></div>
            </div>
            <div className={cn(style.block, style.wide)}>
              <div className={style.titleBlock}>
                <p>Отображение полей</p>
                <div className={style.blockArrow}>
                  <button className={style.button}>
                    <img className={style.icon} src={fillArrowUp} alt=''/>
                  </button>
                  <button className={style.button}>
                    <img className={style.icon} src={fillArrowDown} alt=''/>
                  </button>
                </div>
              </div>
              <ul className={style.column}>
                {
                  // AVAILABLE_FIELDS.map((item, index) => (
                  //   <li key={index} className={style.row}>
                  //     <input type='checkbox' />
                  //     <p>{item}</p>
                  //   </li>
                  // ))
                }
              </ul>
            </div>
            {/* <div className={cn(style.block, style.right)}>
              <p>Сортировать</p>
              <ul className={style.column}>
                {SORT_FIELDS.map((item, index) => (
                  <li key={index} className={style.row}>
                    <input
                      type='checkbox'
                      id={`checkbox${item}`}
                      name='sort'
                      checked={values.sort[index]}
                      onChange={(evt) => handleCheckbox(evt, index)}
                    />
                    <label htmlFor={`checkbox${item}`}>{item}</label>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className={cn(style.divider, style.mix2)}></div>
            <div className={cn(style.block, style.wide)}>
              <div className={style.titleBlock}>
                <p>Группировать</p>
                <div className={style.blockArrow}>
                  <button className={style.button}>
                    <img className={style.icon} src={fillArrowUp} alt=''/>
                  </button>
                  <button className={style.button}>
                    <img className={style.icon} src={fillArrowDown} alt=''/>
                  </button>
                </div>
              </div>
              <ul className={style.column}>
                {GROUP_FIELDS.map((item, index) => (
                  <li key={index} className={style.row}>
                    <input
                      type='checkbox'
                      id={`checkbox1${item}`}
                      name='group'
                      checked={values.group[index]}
                      onChange={(evt) => handleCheckbox(evt, index)}
                    />
                    <label htmlFor={`checkbox1${item}`}>{item}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={style.blockButton}>
            {!reset ? (
              <button className={cn(style.button, style.buttonSuccess)} onClick={handleClickApply}>
                Применить
              </button>
            ) : (
              <button className={cn(style.button, style.buttonReset)} onClick={handleClickReset}>
                Сбросить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import style from './Settings.module.scss'

type SettingsProps = {
  setOpenSettings(): void
  setCheckbox(array: boolean[]): void
  checkbox: boolean[]
  settingsValue: string[]
}

export const Settings: React.FC<SettingsProps> = ({
                                                    setOpenSettings,
                                                    setCheckbox,
                                                    checkbox,
                                                    settingsValue,
                                                  }) => {
  const handleCloseSettings = () => {
    setOpenSettings()
  }

  const handleCheckbox = (position: number) => {
    const updatedCheckedState = checkbox.map((item, index) => (index === position ? !item : item))
    setCheckbox(updatedCheckedState)
  }
  return (
    <div className={style.overlay} onClick={handleCloseSettings}>
      <div className={style.component} onClick={(e) => e.stopPropagation()}>
        <div className={style.title}>
          <p>Отображение блоков</p>
        </div>
        <ul className={style.table}>
          {settingsValue.map((name, index) => (
            <li key={index} className={style.row}>
              <div>{name}</div>
              <label className={style.switch} htmlFor={`checkbox${index}`}>
                <input
                  type='checkbox'
                  id={`checkbox${index}`}
                  onChange={() => handleCheckbox(index)}
                  checked={checkbox[index]}
                />
                <span />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
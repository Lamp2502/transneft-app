import React, { useState, useEffect, useCallback } from 'react'
import style from './Documents.module.scss'
import { Link, NavLink } from 'react-router-dom'
import settingsIcon from '@assets/settingsIcon.svg'
import findIcon from '@assets/findIcon.svg'
import applyButtonIcon from '@assets/applyButtonIcon.svg'
import dashIcon from '@assets/dashIcon.svg'
import { documents } from '@utils/mock'
import { DOCUMENT_SETTINGS_PATH } from '@utils/constants'
import IconButton from '@mui/material/IconButton'
import MaterialUIPickers from '@components/DatePicker/datePicker'
import BasicSelect from '@components/Select'

interface Document {
  id: number
  date: string
  documentType: string
  documentNumber: string
  documentContent: string
  documentContract: string
  documentStatus: string
  documentCustomer: string
}

const DATE = 'date'
const DOCUMENT_TYPE = 'documentType'
const DOCUMENT_NUMBER = 'documentNumber'
const DOCUMENT_CONTENT = 'documentContent'
const DOCUMENT_CONTRACT = 'documentContract'
const DOCUMENT_STATUS = 'documentStatus'
const DOCUMENT_CUSTOMER = 'documentCustomer'

const documentsValue = [
  { id: 1, name: 'Дата документа' },
  { id: 2, name: 'Тип документа' },
  { id: 3, name: '№ документа' },
  { id: 4, name: 'Содержание' },
  { id: 5, name: 'Договор' },
  { id: 6, name: 'Статус' },
  { id: 7, name: 'Организация(Заказчик)' },
  { id: 8, name: 'Исполнитель(Поставщик)' },
  { id: 9, name: 'Сумма' },
]

const dataForInput = [
  DATE,
  DOCUMENT_TYPE,
  DOCUMENT_NUMBER,
  DOCUMENT_CONTENT,
  DOCUMENT_CONTRACT,
  DOCUMENT_STATUS,
  DOCUMENT_CUSTOMER,
]

export const Documents: React.FC = () => {
  const [searchMenu, setSearchMenu] = useState(false)
  const [searchResults, setSearchResults] = React.useState<Document[]>([])

  const [searchTerm, setSearchTerm] = useState<Record<string, string>>({
    date: '',
    documentType: '',
    documentNumber: '',
    documentContent: '',
    documentContract: '',
    documentStatus: '',
    documentCustomer: '',
  })

  useEffect(() => {
    const documentSearchTypes = Object.entries(searchTerm)
    const results: Document[] = documents.filter((document: Record<string, any>) => {
      for (let i = 0; i < documentSearchTypes.length; i++) {
        const [key, value] = documentSearchTypes[i]
        if (!document[key].toLowerCase().includes(value.toLowerCase())) {
          return false
        }
      }
      return true
    })
    setSearchResults(results)
  }, [searchTerm])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
      setSearchTerm((prevState) => {
        prevState[key] = event.target.value

        return { ...prevState }
      })
    },
    [setSearchTerm],
  )

  const showSearchMenu = useCallback(() => {
    setSearchMenu(!searchMenu)
  }, [searchMenu])

  return (
    <div className={style.component}>
      <div className={style.header}>
        <h2>Документы</h2>
        <div className={style.panelTabs}>
          <nav className={style.tabs}>
            <li className={style.item}>
              <input
                type='checkbox'
                id='checkboxPeriod'
                // name='period'
                // checked={values.period}
                // onChange={handleCheckbox}
              />
              <label htmlFor='checkboxPeriod'>Период</label>
            </li>

            <IconButton className={style.datePicker}
                        sx={{
                          ml: 1,
                          '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            color: 'transparent',
                          },
                        }}
            >
              <MaterialUIPickers />
            </IconButton>

            <img src={dashIcon} alt='dashIcon' className={style.dashIcon} />

            <IconButton className={style.datePicker}
                        sx={{
                          ml: 1,
                          '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            color: 'transparent',
                          },
                        }}
            >
              <MaterialUIPickers />
            </IconButton>

            <IconButton className={style.select}
                        sx={{
                          ml: 1,
                          '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            color: 'transparent',
                          },
                        }}
            >
              <BasicSelect />
            </IconButton>
            <IconButton
              className={style.applyButton}
              sx={{
                ml: 1,
                '&.MuiButtonBase-root:hover': {
                  backgroundColor: 'transparent',
                  color: 'transparent',
                },
              }}
            >
              <img src={applyButtonIcon} alt='applyButtonIcon' />
              <span>Применить</span>
            </IconButton>
          </nav>
          <div className={style.control}>
            <button className={style.controlIcon} onClick={showSearchMenu}>
              <img src={findIcon} alt='icon' />
            </button>
            <NavLink to={DOCUMENT_SETTINGS_PATH}>
              <button className={style.controlIcon}>
                <img src={settingsIcon} alt='icon' />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={style.main}>
        <ul className={style.table}>
          <ul className={style.headerTable}>
            {documentsValue.map((documentValue, index) => (
              <li className={style.item} key={documentValue.id + index}>
                <div>
                  {documentValue.name}
                  <div className={searchMenu ? style.searchInput : style.hide}>
                    <input
                      type='text'
                      onChange={(e) => handleChange(e, dataForInput[index])}
                      placeholder='Поиск'
                      value={searchTerm[dataForInput[index]]}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {searchResults.map((item: any) => (
            <ul key={item.id} className={style.rowTable}>
              <li className={style.item}>{item.date}</li>
              <li className={style.item}>{item.documentType}</li>
              <li className={style.item}>
                <Link className={style.link} to={'/'}>
                  {item.documentNumber}
                </Link>
              </li>
              <li className={style.item}>{item.documentContent}</li>
              <li className={style.item}>
                <Link className={style.link} to={'/'}>
                  {item.documentContract}
                </Link>
              </li>
              <li className={style.item}>{item.documentStatus}</li>
              <li className={style.item}>{item.documentCustomer}</li>
              <li className={style.item}>{item.documentPerformer}</li>
              <li className={style.item}>{item.documentOrder}</li>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  )
}
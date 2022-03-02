import React from 'react'
import { useRef, useCallback, useEffect, useState } from 'react'
import style from './Modal.module.scss'
import cn from 'classnames'
import { useHistory } from 'react-router-dom'

type ModalProps = {
  setStatus: (arg: boolean) => void
}

export const Modal: React.FC<ModalProps> = ({ setStatus }) => {
  const [visible, setVisible] = useState(true)
  const [openSecondModal, setOpenSecondModal] = useState(false)
  let timeout = useRef<null | ReturnType<typeof setTimeout>>(null)

  const history = useHistory()

  const handleScroll = useCallback(() => {
    const show = () => {
      setVisible(true)
      timeout.current = null
    }
    setVisible(false)
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(show, 500)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const handleRemoveScroll = useCallback(() => {
    window.removeEventListener('scroll', handleScroll)
    setVisible(false)
    setStatus(true)
  }, [])

  return (
    <>
      {openSecondModal &&
      <div className={style.modalAfterClose}>
        <div className={style.body}>
          <div className={style.blockButton}>
            <div className={style.modalContent}>
              <h2>Предупреждение</h2>
              <p>Вы не ознакомились с документом. Подтвердите выполнение задачи,
                нажмите кнопку "Ознакомлен" внизу экрана
              </p>

            </div>
            <div className={style.buttons}>
              <button onClick={() => history.go(-1)}
                      className={cn(style.button, style.buttonClose)}>Все равно, закрыть
              </button>

              <button className={cn(style.button, style.buttonApprove)}
                      onClick={() => {
                        setOpenSecondModal(false)
                      }}>Продолжить
              </button>
            </div>
          </div>
        </div>
      </div>
      }
      <div className={style.component}>
        <div className={cn(style.component, !visible && style.componentHide)}>
          <div className={style.header} />
          <div className={style.body}>
            <div className={style.blockButton}>
              <button className={cn(style.button, style.buttonClose)}
                      onClick={() => setOpenSecondModal(true)}>Закрыть
              </button>
              <button className={cn(style.button, style.buttonApprove)}
                      onClick={handleRemoveScroll}>Ознакомлен
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
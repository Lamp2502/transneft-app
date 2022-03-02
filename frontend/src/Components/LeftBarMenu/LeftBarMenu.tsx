import React, { useCallback, useState } from 'react'
import style from './LeftBarMenu.module.scss'
import contractsIcon from '@assets/contractsIcon.svg'
import documentsIcon from '@assets/documentsIcon.svg'
import tasksIcon from '@assets/tasksIcon.svg'
import reportsIcon from '@assets/reportsIcon.svg'
import exitIcon from '@assets/exitIcon.svg'
import transLogo from '@assets/transLogo.svg'
import closeButtonIcon from '@assets/closeButtonIcon.svg'
import IconButton from '@mui/material/IconButton'
import maximizeMenuButtonIcon from '@assets/maximizeMenuButtonIcon.svg'
import { NavLink } from 'react-router-dom'

export const LeftBarMenu: React.FC = () => {

  const [minimizeMenu, setMinimizeMenu] = useState(false)

  const minimizeMenuButton = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
    setMinimizeMenu(!minimizeMenu)
  }, [minimizeMenu])

  return (
    <div className={minimizeMenu ? style.leftBar : style.leftBarMinimized}>
      <div className={style.leftBarMenu}>
        <div className={style.transLogo}>
          <img className={style.transLogoIcon} src={transLogo} alt='transLogoIcon' />
          <IconButton sx={{
            ml: 1,
            '&.MuiButtonBase-root:hover': {
              backgroundColor: 'transparent',
              color: 'transparent',
            },
          }}
                      onClick={minimizeMenuButton}

          >
            <img className={style.closeButtonIcon} src={closeButtonIcon} alt='closeButtonIcon' />
          </IconButton>
        </div>

        <div className={style.maximizeMenuButtonIcon}>
          <IconButton onClick={() => setMinimizeMenu(!minimizeMenu)}
                      sx={{
                        ml: 1,
                        '&.MuiButtonBase-root:hover': {
                          backgroundColor: 'transparent',
                          color: 'transparent',
                        },
                      }}
          >
            <img src={maximizeMenuButtonIcon} alt='maximizeMenuButtonIcon' />
          </IconButton>
        </div>


        <div className={style.menuItems}>
          <div>
            <IconButton activeClassName={style.active}
                        to={'/contracts'}
                        component={NavLink}
                        sx={{
                          ml: 1,
                          '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            color: 'transparent',
                          },
                        }}
            >
              <img src={contractsIcon} alt='treatiesIcon' />
              <p>Договоры</p>
            </IconButton>
          </div>

          <div>
            <IconButton activeClassName={style.active}
                        to={'/documents'}
                        component={NavLink}
                        sx={{
                          ml: 1,
                          '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            color: 'transparent',
                          },
                        }}
            >
              <img src={documentsIcon} alt='documentsIcon' />
              <p>Документы</p>
            </IconButton>
          </div>

          <div>
            <IconButton activeClassName={style.active}
                        to={'/tasks'}
                        component={NavLink}
                        sx={{
                          ml: 1,
                          '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            color: 'transparent',
                          },
                        }}
            >
              <img src={tasksIcon} alt='tasksIcon' />
              <p>Задачи</p>
              <div className={style.tasksEllipseIcon}>
                <span className={style.badgeCount}>1</span>
              </div>
            </IconButton>
          </div>

          <div>
            <IconButton activeClassName={style.active}
                        to={'/reports'}
                        component={NavLink}
                        sx={{
                          ml: 1,
                          '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            color: 'transparent',
                          },
                        }}
            >
              <img src={reportsIcon} alt='reportsIcon' />
              <p>Отчеты</p>
            </IconButton>
          </div>
          <div>
            <IconButton activeClassName={style.active}
                        to={'/exit'}
                        component={NavLink}
                        sx={{
                          ml: 1,
                          '&.MuiButtonBase-root:hover': {
                            backgroundColor: 'transparent',
                            color: 'transparent',
                          },
                        }}
            >
              <img src={exitIcon} alt='exitIcon' />
              <p>Выход</p>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import style from './App.module.scss'
import transLogo from '@assets/transLogo.svg'
import { Spinner } from '@assets/Spinner/Spinner'
import { BrowserRouter, Switch } from 'react-router-dom'
import { RouterWithComponents } from './RouterWithComponents'


export const App: React.FC = () => {
  const [user, setUser] = useState(false)

  setTimeout(() => {
    setUser(true)
  }, 2000)

  return (
    <BrowserRouter>
      <div className={style.App}>
        {!user ? (
          <div className={style.homeScreen}>
            <img src={transLogo} alt='transLogo' />
            <Spinner />
          </div>
        ) : (
          <Switch>
            <RouterWithComponents />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  )
}
import React from 'react'
import style from './TaskProperties.module.scss'
import { Modal } from '@components/Modal/Modal'
import { Attribute } from './part/Attribute/Attribute'
import { Files } from './part/Files/Files'
import { Route } from './part/Route/Route'
import { Comments } from './part/Comments/Comments'

type PropertiesProps = {
  checkbox: boolean[]
  setStatus: (arg: boolean) => void
}
export const TaskProperties: React.FC<PropertiesProps> = ({ checkbox, setStatus }) => {
  return (
    <div className={style.main}>
      <div className={style.area}>
        {checkbox[0] && <Attribute />}
        {checkbox[4] && <Files />}
      </div>
      <div className={style.subArea}>
        {checkbox[1] && <Route />}
        {checkbox[2] && <Comments />}
      </div>
      <Modal setStatus={setStatus}
      />
    </div>
  )
}

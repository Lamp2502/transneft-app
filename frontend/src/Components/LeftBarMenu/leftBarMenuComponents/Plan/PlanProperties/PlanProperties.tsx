import React from 'react'
import style from './PlanProperties.module.scss'
import { Attribute } from './part/Attribute/Attribute'
import { Comments } from './part/Comments/Comments'
import { Plan } from './part/PlanContent/PlanContent'
import { Route } from './part/Route/Route'
import { Modal } from '@components/Modal/Modal'

type PropertiesProps = {
  checkbox: boolean[]
  setStatus: (arg: boolean) => void
}
export const PlanProperties: React.FC<PropertiesProps> = ({ checkbox, setStatus }) => {
  return (
    <div className={style.main}>
      <div className={style.area}>
        {checkbox[0] && <Attribute />}
        {checkbox[1] && <Plan />}
      </div>
      <div className={style.subArea}>
        {checkbox[2] && <Route />}
        {checkbox[3] && <Comments />}
      </div>
      <Modal setStatus={setStatus} />
    </div>
  )
}

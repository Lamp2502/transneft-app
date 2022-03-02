import React from 'react'
import style from './SpecProperties.module.scss'
import { Attribute } from './part/Attribute/Attribute'
import { SpecBlock } from './part/SpecBlock/SpecBlock'
import { Route } from './part/Route/Route'
import { Comments } from './part/Comments/Comments'

type PropertiesProps = {
  checkbox: boolean[]
  setStatus: (arg: boolean) => void
}
export const SpecProperties: React.FC<PropertiesProps> = ({ checkbox, setStatus }) => {
  return (
    <div className={style.main}>
      <div className={style.area}>
        {checkbox[0] && <Attribute />}
        {checkbox[3] && <SpecBlock />}
      </div>
      <div className={style.subArea}>
        {checkbox[1] && <Route />}
        {checkbox[2] && <Comments />}
      </div>
    </div>
  )
}

import React from 'react'
import style from './OwnerProperties.module.scss'
import { Attribute } from './part/Attribute/Attribute'
import { Comments } from './part/Comments/Comments'
import { Files } from './part/Files/Files'
import { OwnerBlock } from './part/OwnerBlock/OwnerBlock'

type PropertiesProps = {
  checkbox: boolean[]
  setStatus: (arg: boolean) => void
}
export const OwnerProperties: React.FC<PropertiesProps> = ({ checkbox, setStatus }) => {
  return (
    <div className={style.main}>
      <div className={style.area}>
        {checkbox[0] && <Attribute />}
        {checkbox[1] && <OwnerBlock />}
        {checkbox[2] && <Files />}
      </div>
      <div className={style.subArea}>
        {checkbox[3] && <Comments />}
      </div>
    </div>
  )
}

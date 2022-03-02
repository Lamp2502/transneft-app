import React from 'react'
import style from './ModalFull.module.scss'
import cn from 'classnames'

type ModalFullProps = {
  open: boolean,
  setOpen: (arg: boolean) => void,
  children?: React.ReactNode;
}
export const ModalFull: React.FC<ModalFullProps> = ({ open, setOpen, children }) => {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={cn(style.overlay, open && style.overlayOpen)} onClick={handleClose}>
      <div className={cn(style.component, open && style.componentFull)}
           onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

import React, { useCallback } from 'react'
import style from '../../PlanProperties.module.scss'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as FirstStage } from '@assets/bpm/first.svg'
import { ReactComponent as SecondStage } from '@assets/bpm/second.svg'
import { ReactComponent as ThirdStage } from '@assets/bpm/third.svg'
import { ReactComponent as FourthStage } from '@assets/bpm/fourth.svg'
import { ReactComponent as FifthStage } from '@assets/bpm/fifth.svg'
import vectorUpIcon from '@assets/vectorUpIcon.svg'
import cn from 'classnames'

export const Route: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isShowActive, setIsShowActive] = useState(false)
  const refVector = useRef<HTMLElement | null>(null)
  const refTree = useRef<HTMLElement | null>(null)

  const handleVectorClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <div className={style.blockData}>
      <div className={style.title}>
        <p>Путь документа</p>
        <button className={style.treeButton} onClick={handleVectorClick}>
          <CSSTransition
            nodeRef={refVector}
            in={isOpen}
            timeout={500}
            classNames={{
              enter: style.vectorEnter,
              enterActive: style.vectorEnterActive,
              enterDone: style.vectorEnterDone,
              exit: style.vectorExit,
              exitActive: style.vectorExitActive,
              exitDone: style.vectorExitDone,
            }}
          >
            <img
              ref={refVector as React.RefObject<HTMLImageElement>}
              src={vectorUpIcon}
              alt='icon'
            />
          </CSSTransition>
        </button>
      </div>
      <CSSTransition
        in={isOpen}
        nodeRef={refTree}
        timeout={500}
        onExited={() => {
          setIsShowActive(true)
        }}
        onEnter={() => {
          setIsShowActive(false)
        }}
        classNames={{
          enter: style.treeEnter,
          enterActive: style.treeEnterActive,
          enterDone: style.treeEnterDone,
          exit: style.treeExit,
          exitActive: style.treeExitActive,
          exitDone: style.treeExitDone,
        }}
      >
        <div ref={refTree as React.RefObject<HTMLDivElement>} className={style.treeStage}>
          {isShowActive ? (
            <div className={cn(style.branch, style.activeScale)}>
              <ThirdStage className={style.activeStage} />
              <p className={cn(style.odd, style.active)}>Ознакомление</p>
            </div>
          ) : (
            <>
              <div className={style.branch}>
                <FirstStage className={style.stage} />
                <p className={style.odd}>Загрузка в ЛКК</p>
              </div>
              <div className={style.divider}></div>
              <div className={style.branch}>
                <p className={style.even}>Назначение отв. лиц</p>
                <SecondStage className={style.stage} />
              </div>
              <div className={style.divider}></div>
              <div className={cn(style.branch, style.activeScale)}>
                <ThirdStage className={style.activeStage} />
                <p className={cn(style.odd, style.active)}>Ознакомление</p>
              </div>
              <div className={style.divider}></div>
              <div className={style.branch}>
                <p className={style.even}>Действует</p>
                <FourthStage className={style.stage} />
              </div>
              <div className={style.divider}></div>
              <div className={style.branch}>
                <FifthStage className={style.stage} />
                <p className={style.odd}>Завершен</p>
              </div>
            </>
          )}
        </div>
      </CSSTransition>
    </div>
  )
}

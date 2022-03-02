import React, { useCallback, useRef } from 'react'
import { useState } from 'react'
import style from '../../TaskProperties.module.scss'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as VectorEnter } from '@assets/vectorEnter.svg'
import { comments as initialComments } from '@utils/mock'
import addFileIcon from '@assets/addFileIcon.svg'
import cn from 'classnames'
import vectorUpIcon from '@assets/vectorUpIcon.svg'

export const Comments: React.FC = () => {
  const [comments, setComments] = useState(initialComments)
  const [input, setInput] = useState('')

  const addComment = useCallback(() => {
    setComments([...comments, { id: 4, name: 'New User', text: input, date: '10.02.2022, 12:52' }])
    setInput('')
  }, [comments, input])

  const [isOpen, setIsOpen] = useState(true)
  const [isShowActive, setIsShowActive] = useState(false)
  const refVector = useRef<HTMLElement | null>(null)
  const refTree = useRef<HTMLElement | null>(null)

  const handleVectorClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])


  return (
    <div className={cn(style.blockData, style.blockDataComment)}>
      <div className={style.title}>
        <p>Замечания</p>
        <button className={style.commentsButton} onClick={handleVectorClick}>
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
            <img ref={refVector as React.RefObject<HTMLImageElement>}
                 className={style.icon}
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
          enter: style.commentsContentEnter,
          enterActive: style.commentsContentEnterActive,
          enterDone: style.commentsContentEnterDone,
          exit: style.commentsContentExit,
          exitActive: style.commentsContentExitActive,
          exitDone: style.commentsContentExitDone,
        }}
      >
        <div ref={refTree as React.RefObject<HTMLDivElement>} className={style.commentsContent}>
          {isShowActive ? (
            <>

            </>
          ) : (
            <>
              {comments.map((comment) => (
                <div key={comment.id} className={style.item}>
                  <p className={style.itemTitle}>{comment.name}</p>
                  <p className={style.content}>{comment.text}</p>
                  <p className={style.content}>
                    <a href='./task'>{comment.file}</a>
                  </p>
                  <p className={style.date}>{comment.date}</p>
                </div>
              ))}
            </>
          )}
        </div>

      </CSSTransition>
      <div className={style.inputBlock}>
        <div className={style.fileUpload}>
          <label htmlFor='file'>
            <img src={addFileIcon} alt='addFileIcon' />
          </label>
          <input id='file' type='file' style={{ display: 'none' }} />
        </div>
        <input
          type='text'
          placeholder='Напишите ваше замечание'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={style.button}>
          <VectorEnter className={style.iconEnter} onClick={addComment} />
        </button>
      </div>
    </div>
  )
}
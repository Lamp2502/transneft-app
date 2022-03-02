import React, { useState } from 'react'
import style from './App.module.scss'
import { LeftBarMenu } from '@components/LeftBarMenu/LeftBarMenu'
import { Header } from '@components/Header/Header'
import { Route } from 'react-router-dom'
import {
  CONTRACT_PATH,
  CONTRACTS_PATH,
  DOCUMENTS_PATH,
  DOCUMENT_SETTINGS_PATH,
  EXIT_PATH,
  MAIN_PATH,
  REPORTS_PATH,
  TASKS_PATH,
  TASK_PATH,
  SPECIFICATION_PATH,
  OWNER_PATH,
  PLAN_PATH,
} from '@utils/constants'
import { MyProfile } from '@components/myProfile/myProfile'
import { Contract } from '@components/LeftBarMenu/leftBarMenuComponents/Contracts/Contract/Contract'
import { Contracts } from '@components/LeftBarMenu/leftBarMenuComponents/Contracts/Contracts'
import { Documents } from '@components/LeftBarMenu/leftBarMenuComponents/Documents/Documents'
import { Settings } from '@components/LeftBarMenu/leftBarMenuComponents/Documents/Settings/Settings'
import { Tasks } from '@components/LeftBarMenu/leftBarMenuComponents/Tasks/Tasks'
import { Task } from '@components/LeftBarMenu/leftBarMenuComponents/Tasks/Task/Task'
import { Reports } from '@components/LeftBarMenu/leftBarMenuComponents/Reports'
import { Exit } from '@components/LeftBarMenu/leftBarMenuComponents/Exit'
import { Specification } from '@components/LeftBarMenu/leftBarMenuComponents/Specification/Specification'
import { Owner } from '@components/LeftBarMenu/leftBarMenuComponents/Owner/Owner'
import { Plan } from '@components/LeftBarMenu/leftBarMenuComponents/Plan/Plan'

export const RouterWithComponents: React.FC = () => {
  const [status, setStatus] = useState(false)

  return (
    <div>
      <div className={style.components}>
        <LeftBarMenu />
        <div className={style.allContent}>
          <Header />
          <Route exact path={MAIN_PATH}>
            <MyProfile />
          </Route>
          <Route path={CONTRACT_PATH}>
            <Contract status={status} setStatus={setStatus} />
          </Route>
          <Route exact path={CONTRACTS_PATH}>
            <Contracts />
          </Route>
          <Route path={DOCUMENT_SETTINGS_PATH}>
            <Settings />
          </Route>
          <Route exact path={DOCUMENTS_PATH}>
            <Documents />
          </Route>
          <Route path={TASK_PATH}>
            <Task status={status} setStatus={setStatus} />
          </Route>
          <Route path={SPECIFICATION_PATH}>
            <Specification status={status} setStatus={setStatus} />
          </Route>
          <Route path={OWNER_PATH}>
            <Owner status={status} setStatus={setStatus} />
          </Route>
          <Route path={PLAN_PATH}>
            <Plan status={status} setStatus={setStatus} />
          </Route>
          <Route exact path={TASKS_PATH}>
            <Tasks />
          </Route>
          <Route path={REPORTS_PATH}>
            <Reports />
          </Route>
          <Route path={EXIT_PATH}>
            <Exit />
          </Route>
        </div>
      </div>
    </div>
  )
}

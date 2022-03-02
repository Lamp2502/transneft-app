import React from 'react'
import style from './Contract.module.scss'
import { Switch, Route, NavLink, useHistory } from 'react-router-dom'
import settingsIcon from '@assets/settingsIcon.svg'
import arrowLeft from '@assets/arrowLeft.svg'
import findIcon from '@assets/findIcon.svg'
import {ContractProperties} from './ContractProperties/ContractProperties'
import {Link} from './Link/Link'
import {ReactComponent as StatusIconTrue} from '@assets/statusIconTrue.svg'

import {
    CONTRACTS_PATH,
    CONTRACT_COMMENT_PATH,
    CONTRACT_HISTORY_PATH,
    CONTRACT_LINK_PATH,
    CONTRACT_PATH,
} from '@utils/constants'
import {ReactComponent as StatusIconFalse} from "@assets/statusIconFalse.svg";

type ContractProps = {
    status: boolean
    setStatus: (arg: boolean) => void
}

export const Contract: React.FC<ContractProps> = ({status, setStatus}) => {

    const history = useHistory()

    return (
        <div className={style.component}>
            <div className={style.header}>
                <div className={style.title}>
                    <div className={style.subTitle}>
                        <button className={style.arrowLeft} onClick={() => history.go(-1)}>
                            <img className={style.icon} src={arrowLeft} alt='icon'/>
                        </button>
                        <h2>Договор на поставку МТР №ПАО-87-2021</h2>
                    </div>
                    {status ? (
                        <div className={style.status}>
                            <StatusIconTrue/>
                            <p>Ознакомлен</p>
                        </div>
                    ) : (
                        <div className={style.status}>
                            <StatusIconFalse/>
                            <p>Ознакомление</p>
                        </div>
                    )}
                </div>
                <div className={style.panelTabs}>
                    <nav className={style.tabs}>
                        <li className={style.item}>
                            <NavLink
                                exact
                                className={style.link}
                                activeClassName={style.active}
                                to={CONTRACT_PATH}
                            >
                                Свойства
                            </NavLink>
                        </li>
                        <li className={style.item}>
                            <NavLink
                                className={style.link}
                                activeClassName={style.active}
                                to={CONTRACT_LINK_PATH}
                            >
                                Связи
                            </NavLink>
                        </li>
                        <li className={style.item}>
                            <NavLink
                                className={style.link}
                                activeClassName={style.active}
                                to={CONTRACT_HISTORY_PATH}
                            >
                                История документа
                            </NavLink>
                        </li>
                        <li className={style.item}>
                            <NavLink
                                className={style.link}
                                activeClassName={style.active}
                                to={CONTRACT_COMMENT_PATH}
                            >
                                Замечания
                            </NavLink>
                        </li>
                    </nav>
                    <div className={style.control}>
                        <button className={style.controlIcon}>
                            <img src={findIcon} alt='icon'/>
                        </button>
                        <button className={style.controlIcon}>
                            <img src={settingsIcon} alt='icon'/>
                        </button>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path={CONTRACT_PATH}>
                    <ContractProperties setStatus={setStatus}
                    />
                </Route>
                <Route path={CONTRACT_LINK_PATH}>
                    <Link/>
                </Route>
                <Route path={CONTRACT_HISTORY_PATH}>
                    <div>History</div>
                </Route>
                <Route path={CONTRACT_COMMENT_PATH}>
                    <div>Comment</div>
                </Route>
            </Switch>
        </div>
    )
}

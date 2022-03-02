import React from "react";
import style from "./Spinner.module.scss";
import spinner from '../spinner.gif'

export const Spinner: React.FC = () => {
    return (
        <div className={style.spinner}>
            <img alt='loading' src={spinner}/>
        </div>
    );
}
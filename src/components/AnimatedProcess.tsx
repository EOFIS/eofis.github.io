import React, { CSSProperties } from "react"
import style from "./AnimatedProcess.module.sass";
import logo from "../img/logo.svg";

export const AnimatedProcess = () => {
    const highlightStart = 10;
    const highlightLength = 20;
    return <div className={style.animationContainer}>
        {/* <div className={style.document}>
            {[...Array(50)].map(
                (_, i) => <div
                    className={style.textLine + ' ' + (i > highlightStart && i < highlightStart + highlightLength && style.highlight)}
                    style={{ '--h-n': i - highlightStart } as CSSProperties}
                    key={i}></div>
            )}
        </div>
        <div className={style.logoQG}>
            <img src={logo} />
        </div> */}
        <div className={style.cardsContainer}>
        <div className={style.card}>
                <div className={style.front}>Q</div>
                <div className={style.back}>A</div>
            </div>
            <div className={style.card}>
                <div className={style.front}>Q</div>
                <div className={style.back}>A</div>
            </div>
            <div className={style.card}>
                <div className={style.front}>Q</div>
                <div className={style.back}>A</div>
            </div>
        </div>
    </div>
}
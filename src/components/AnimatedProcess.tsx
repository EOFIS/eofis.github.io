import React, { CSSProperties } from "react"
import style from "./AnimatedProcess.module.sass";
import logo from "../img/logo.svg";
import { Calendar3, CardChecklist, GraphUp, People } from "react-bootstrap-icons";

export const AnimatedProcess = () => {
    const highlightStart = 10;
    const highlightLength = 20;
    return <div className={style.animationContainer}>
        <div className={style.document}>
            {[...Array(50)].map(
                (_, i) => <div
                    className={style.textLine + ' ' + (i > highlightStart && i < highlightStart + highlightLength && style.highlight)}
                    style={{ '--h-n': i - highlightStart } as CSSProperties}
                    key={i}></div>
            )}
        </div>
        <div className={style.logoQG}>
            <img src={logo} />
        </div>
        <div className={style.cardsContainer}>
            <div className={style.card}>
                <div className={style.front}>
                    <CardChecklist />
                </div>
                <div className={style.title}>Learn</div>
            </div>
            <div className={style.card}>
                <div className={style.front}>
                    <Calendar3 />
                </div>
                <div className={style.title}>Schedule</div>
            </div>
            <div className={style.card}>
                <div className={style.front}>
                    <GraphUp />
                </div>
                <div className={style.title}>Analyse</div>
            </div>
            <div className={style.card}>
                <div className={style.front}>
                    <People />
                </div>
                <div className={style.title}>Connect</div>
            </div>
        </div>
    </div>
}
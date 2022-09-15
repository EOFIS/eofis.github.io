import React, { ReactNode } from "react";
import style from "./ImagePane.module.sass";

export const ImagePane = ({ children, imageLocation: location, src, inset, fillWidth }:{
    imageLocation: 'left' | 'right';
    src: string;
    inset?: boolean;
    fillWidth?: boolean;
    children: ReactNode;
}) => {
    return <div className={style.imagePane + ' ' + (location === 'right'? style.right: style.left) + ' ' + (inset ? style.inset:'')}>
        <div className={style.imageContainer + ' ' + (inset ? style.inset:'')}>
            <img src={src} width={fillWidth?"100%":"auto"}/>
        </div>
        <div className={style.contentContainer + ' ' + (inset ? style.inset:'')}>
            {children}
        </div>
    </div>
}
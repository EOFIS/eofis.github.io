import React, { ReactElement } from "react";
import style from "./ImageShowcase.module.sass";

export const ImageShowcase: React.FC<{
    src: string;
    overlay?: ReactElement;
}> = (props) => {
    return <div className={style.imageShowcase}>
        <div className={style.imageContainer}>
            <img src={props.src}/>
            <div className={style.overlayContainer}>
                {props.overlay}
            </div>
        </div>
    </div>
}
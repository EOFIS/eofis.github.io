import React, { ReactNode } from "react";
import style from "./FeatureList.module.sass";

export const FeatureList = ({ children }:{children: ReactNode}) => {
    return <div className={style.featureList}>
        {children}
    </div>
}
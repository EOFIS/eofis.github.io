import React from "react";
import style from "./FeatureList.module.sass";

export const FeatureList: React.FC<{}> = ({ children }) => {
    return <div className={style.featureList}>
        {children}
    </div>
}
import React from "react"
import style from "./Button.module.sass";

export const Button: React.FC<{
    primary?: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & React.AriaAttributes> = ({children, primary, ...rest}) => {
    return <button className={style.button + (primary && " " + style.primary )} {...rest}>
        {children}
    </button>
}
import React from "react";
import logo from "../logo.svg";
import style from "./Logo.module.sass";

export const Logo = ({ image }: { image?: boolean }) => {
  return (
    <div className={style.logo}>
      {image && <img src={logo} />}
      <span>eofis</span>
    </div>
  );
};

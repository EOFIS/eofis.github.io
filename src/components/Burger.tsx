import React from "react";
import { func } from "prop-types";
import style from "./Burger.module.sass";

export const Burger = ({
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) => {
  return (
    <div
      onClick={() => {
        setOpen((prev: any) => !prev);
      }}
      className={style["styled-menu-btn"]}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

Burger.propTypes = {
  setOpen: func.isRequired,
};

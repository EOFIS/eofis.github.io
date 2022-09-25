import React from "react";
import { bool, func } from "prop-types";
import style from "./Menu.module.sass";
import { Link } from "react-router-dom";
import cross from "../cross.png";

export const Menu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) => {
  return (
    <div className={open ? style["styled-nav"] : style["styled-nav-hidden"]}>
      <div
        className={style.cross}
        onClick={() => {
          setOpen((prev: any) => !prev);
        }}
      >
        <img alt="Exit menu" src={cross} />
      </div>
      <Link
        to="/about"
        onClick={() => {
          setOpen((prev: any) => !prev);
        }}
      >
        More about us.
      </Link>
      <Link
        to="/tech"
        onClick={() => {
          setOpen((prev: any) => !prev);
        }}
      >
        Techy Stuff.
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          setOpen((prev: any) => !prev);
        }}
      >
        Contact.
      </Link>
      <Link
        to="/blog"
        onClick={() => {
          setOpen((prev: any) => !prev);
        }}
      >
        Blog.
      </Link>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

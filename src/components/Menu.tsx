import React from "react";
import { bool } from "prop-types";
import style from "./Menu.module.sass";
import { Link } from "react-router-dom";

export const Menu = ({ open }: { open: boolean }) => {
  console.log(open);
  return (
    <div className={open ? style["styled-nav"] : style["styled-nav-hidden"]}>
      <Link to="/about">More about us.</Link>
      <Link to="/tech">Techy Stuff.</Link>
      <Link to="/contact">Contact.</Link>
      <Link to="/blog">Blog.</Link>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

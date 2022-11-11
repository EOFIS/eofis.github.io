import React, { useState, ReactNode } from "react";
import style from "./FAQBanner.module.sass";

const QuestionContext = React.createContext<any | null>(null);
export default function Banner({ children, ...restProps }:{children: ReactNode}) {
  return (
    <div className={style.container} {...restProps}>
      <div className={style.Inner}>{children}</div>
    </div>
  );
}

Banner.Entity = function BannerEntity({ children, ...restProps }:{children: ReactNode}) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <div className={style.entity} {...restProps}>{children}</div>
    </QuestionContext.Provider>
  );
};

Banner.Question = function BannerHeader({ children, ...restProps }:{children: ReactNode}) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <div className={style.question} onClick={() => setOpen((open: any) => !open)} {...restProps}>
      {children}
      {open ? <h3>^</h3> : <h3>+</h3>}
    </div>
  );
};

Banner.Text = function BannerText({ children, ...restProps }:{children: ReactNode}) {
  const { open } = React.useContext(QuestionContext);

  return open ? <p className={style.answer} {...restProps}>{children}</p> : null;
};
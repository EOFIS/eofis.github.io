import React, { useState, ReactNode } from "react";
import { Container, Entity, Inner, Question, Text } from "./FAQBannerStyle";

const QuestionContext = React.createContext<any | null>(null);
export default function Banner({ children, ...restProps }:{children: ReactNode}) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Banner.Entity = function BannerEntity({ children, ...restProps }:{children: ReactNode}) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};

Banner.Question = function BannerHeader({ children, ...restProps }:{children: ReactNode}) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question onClick={() => setOpen((open: any) => !open)} {...restProps}>
      {children}
      {open ? <h3>^</h3> : <h3>+</h3>}
    </Question>
  );
};

Banner.Text = function BannerText({ children, ...restProps }:{children: ReactNode}) {
  const { open } = React.useContext(QuestionContext);

  return open ? <Text {...restProps}>{children}</Text> : null;
};
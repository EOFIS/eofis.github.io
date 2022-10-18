import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 5px
`;
export const Entity = styled.div`
  border-bottom: 5px solid #070707;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 75px 40px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  padding: 0.75em 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
`;

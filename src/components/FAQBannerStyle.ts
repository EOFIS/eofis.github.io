import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 5px
`;
export const Entity = styled.div`
  width: 99%;
  margin: auto;
`;
export const Inner = styled.div`
  padding: 75px 40px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  border-bottom: 3px solid #070707;
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px;
  display: flex;
  font-weight: bold;
  padding: 0 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  border-bottom: 3px solid #070707;
  max-height: 1190px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0em 1.12em 0.75em 1.12em;
  user-select: none;
  margin: 10px;
`;

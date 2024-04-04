import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 180px;
  margin-right: 100px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    justify-content: center;
    display: flex;
    margin-right: 0%;
  }
  & > * {
    flex: 1 1 200px;
    margin-left: 0px;
  }
`;

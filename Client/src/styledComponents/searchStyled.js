import styled from "styled-components";

export const SearchStyled = styled.div`
  /* background-color: rgb(62, 62, 62); */
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 70px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
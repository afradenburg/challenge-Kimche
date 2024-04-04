import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 3px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ResetStyled = styled.button `
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #ad2020;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6c2112;
  }
`
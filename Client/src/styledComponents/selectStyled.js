import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
 width : 80% ;
}
`;

export const StyledSelect = styled.select`
  padding: 8px 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const FilterButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export const Subtitle = styled.h2`
   display: flex;
  flex-direction: column;
  font-family: 'Comic Sans MS', cursive;
  text-shadow: 2px 2px 4px #00ff00;
  color: #00b0c8;
  font-size: 25px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  background-color: #353c43;
`;

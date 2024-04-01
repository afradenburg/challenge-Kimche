import styled from "styled-components";

export const CardStyled = styled.div`
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 65px;
  
  @media screen and (max-width: 768px) {
  /* Estilos para pantallas más pequeñas */
  margin-left: 0px;
  justify-content: center;
}
  & > * {
    flex: 1 1 200px;
    margin-left: 0px;
  }
`
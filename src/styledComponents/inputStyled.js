import styled, { keyframes } from 'styled-components';

const neonAnimation = keyframes`
  50% {
    box-shadow: 0 0 20px blue, 0 0 30px #00ff00;
  }
  100% {
    box-shadow: 0 0 10px #00ff00;
  }
`;

export const InputStyled = styled.input`
  width: 300px;
  height: 30px;
  margin-right: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 10px #00ff00;
  animation: ${neonAnimation} 2s linear infinite;
  transition: box-shadow 0.3s ease;
 
  &:hover {
    box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00;
  }

  &:focus {
    box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
  }

  &::placeholder {
    font-size: 1.2em;
  }

  @media screen and (max-width: 768px) {
  padding: 2% 1%;
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
}
`;


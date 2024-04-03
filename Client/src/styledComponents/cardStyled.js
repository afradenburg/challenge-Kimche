import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
`;

export const CardStyle = styled.div`
  background-position: center;
  background-color: #353c43fa;
  color: wheat;
  border-radius: 25px;
  width: 100%;
  max-width: 200px;
  max-height: 500px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  animation: ${slideIn} 1s ease-in-out forwards,
    ${fadeIn} 1s ease-in-out forwards;
`;

export const Button = styled.button`
  background-color: #f5f5f5;
  border: 3px;
  border-radius: 8%;
  margin-top: 15px;
  margin-right: 15px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: blue;
    text-decoration: underline;
    background-color: #9bd5c5;
  }
`;

export const Image = styled.img`
  background-position: center;
  width: 100%;
  max-width: 180px;
  margin-top: 10px;
  border-radius: 100px;
  height: 100%;
  max-height: 180px;
  &:hover {
    border: 3px solid #9bd5c5;
  }
`;

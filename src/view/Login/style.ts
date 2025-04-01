import styled from 'styled-components';

export const Main = styled.div`
width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: Center;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url('/management.svg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  height: 34rem;
  width: 50%;
`;

export const Form = styled.form`
 
`;

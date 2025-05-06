import styled from 'styled-components';

export const Main = styled.div`
margin: 0;
width: 100%;
height: 100vh;
 display: flex;
 justify-content: center;
 align-items: Center;
`;

export const Container = styled.div`
margin: 0;
padding: 10px;
width: 80vw;
height: 90vh;
 display: flex;
 justify-content: center;
 align-items: Center;
 background-color: #ffffff;
 border-radius: 5px;
`;

export const BackgroundImage = styled.div`
  width: 50%;
  background-image: url('/management.svg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  height: 80vh;
  margin-right: 60px;
`;

export const Form = styled.form`
 height: 75vh;
 width: 28rem;
`;

export const H1 = styled.h1`
  color: #0047AB;
  margin-bottom: 6px;
`;

export const Strong = styled.strong`
  color: #0047AB;
`;

export const Paragraph = styled.p`
  line-height: 1.5;
  margin-bottom: 16px;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;


export const Span = styled.span`
 color: #0047AB;
 font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 26rem;
`;

export const LabelRemember = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InputRemember= styled.input`
color:  #0047AB;
margin-right: 5px;
`;

export const Button = styled.button`
  width: 26rem;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 5px;

  background-color: #0047AB;
  &:hover {
    background-color: #1E90FF;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const ParagraphRegistration = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
`;


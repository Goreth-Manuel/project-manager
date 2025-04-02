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
width: 80%;
height: 80vh;
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
  height: 34rem;
  margin-right: 60px;
`;

export const Form = styled.form`
 height: 28rem;
 width: 28rem;
`;

export const H1 = styled.h1`
  color: #0047AB;
  margin-bottom: 20px;
`;

export const Strong = styled.strong`
  color: #0047AB;
`;

export const Paragraph = styled.p`
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

// export const Label = styled.label`
//  font-size: 12px;
// `;

// export const Input = styled.input`
//   width: 26rem;
//   padding: 15px;
//   margin-top: 5px;
//   margin-bottom: 1rem;
//   border-radius: 5px;
// `;

export const Span = styled.span`
 color: #0047AB;
 font-size: 12px;
margin-top: 18px;
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
  margin-top: 10px;

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
  margin-top: 30px;
  font-size: 12px;
`;


import styled from "styled-components";

export const Input = styled.input`
  width: 26rem;
  padding: 15px;
  margin-top: 8px;
  border-radius: 5px;
  margin-bottom: 5px;
  border: none;
  outline: none;
  border: 2px solid #2196F3;

  &:focus {
   border-color: #2196F3; 
   box-shadow: 0 0 4px rgba(33, 150, 243, 0.6);
  }
`;

export const Label = styled.label`
 font-size: 12px;
 margin-top: 20rem !important;

`;
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #013E6A;
    font-family: Arial, sans-serif;
  }
`;

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
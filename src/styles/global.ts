import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #dcdc;
    font-family: Arial, sans-serif;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  padding: 20px;
  color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


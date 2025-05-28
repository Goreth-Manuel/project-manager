import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-width: 20rem;
  height: 150px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const IconWrapper = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: white;
  width: 3rem;
  padding: 10px;
  height: 3rem;
  border-radius: 12px;
  position: relative;
  bottom: 4.5rem;
  margin-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const CardContent = styled.div`
  h4 {
    font-size: 1rem;
    color: gray;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin: 5px 0;
    color: #2a2a3c;
  }

  p {
    font-size: 0.875rem;
    color: #888;
    margin: 0;
  }

  .green {
    color: #28a745;
  }
`;

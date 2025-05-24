import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 20px;
  width: 20rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px;
  }
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .cardone, .cardtwo, .cardthree {
    margin-top: 30px;
    width: 20rem;
    height: 10rem;
    padding: 60px;
    color: #2a2a3c;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      width: 100%;
      padding: 40px;
    }

    @media (max-width: 480px) {
      height: auto;
      padding: 20px;
      font-size: 14px;
    }
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
  }
`;

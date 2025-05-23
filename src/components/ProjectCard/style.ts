import { styled } from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding: 20px;
    width: 20rem;
`;

export const Card = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    .cardone, .cardtwo, .cardthree {
        margin-top: 30px;
        width: 20rem;
        height: 10rem;
        padding: 60px;
        color: #2a2a3c;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); 
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
`;
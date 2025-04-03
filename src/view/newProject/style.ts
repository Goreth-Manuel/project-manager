import styled from "styled-components";

export const H2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
    margin-top: 5px;
`;

export const P = styled.p`
    font-size: 1rem;
    color: #555;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

export const TableRow = styled.tr`
    border-bottom: 1px solid #ddd;
`;

export const TableHeader = styled.th`
    padding: 10px;
    background-color: #f4f4f4;
    text-align: left;
    font-weight: bold;
`;

export const TableData = styled.td`
    padding: 10px;
    text-align: left;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Form = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    margin-top: 15px;
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    
    &:hover {
        background-color: #45a049;
    }
`;

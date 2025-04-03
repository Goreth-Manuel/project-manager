import React from "react";
import styled from "styled-components";

interface Stats {
    title: string;
    value: string;
    percentage: string;
    color: string;
  };
  

const Card = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const StatsCard: React.FC<Stats> = ({ title, value, percentage, color }) => {
  return (
    <Card color={color}>
      <h3>{title}</h3>
      <p>{value}</p>
      <small>{percentage} Since last month</small>
    </Card>
  );
};

export default StatsCard;

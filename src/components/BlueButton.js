import React from "react";
import styled from "styled-components";
const BlueButton = ({ onClick, title }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

const Button = styled.button`
  background: #3d3af8;
  border-radius: 10px;
  padding: 14px 40px;
  cursor: pointer;
  border: none;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;

  text-align: center;

  color: #ffffff;
  transition: all 0.6s linear;
  &:hover {
    border-radius: 20px;
    opacity: 0.9;
  }
`;

export default BlueButton;

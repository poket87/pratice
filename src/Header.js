import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <Title onClick={handleClick}>중국어 단어장</Title>
      <Line />
    </>
  );
};

const Title = styled.h2`
  color: green;
  cursor: pointer;
`;

const Line = styled.hr`
  border: 1px solid green;
`;

export default Header;

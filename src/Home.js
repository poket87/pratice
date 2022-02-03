import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Home = (props) => {
  // 데이터 가져오기
  const my_voca = useSelector((state) => state.word.list);

  const navigate = useNavigate();
  function addWord() {
    navigate("/form");
  }

  return (
    <>
      {my_voca.map((list, id) => {
        return (
          <>
            <WordsBox key={id}>
              <h1>{list.word}</h1>
              <p>[{list.pinyin}]</p>
              <p>{list.meaning}</p>
              <p className="exam">{list.exam}</p>
              <p className="exam">{list.interpretation}</p>
            </WordsBox>
            <AddBtn onClick={addWord}>
              <i className="fas fa-plus-circle"></i>
            </AddBtn>
          </>
        );
      })}
    </>
  );
};

const WordsBox = styled.div`
  width: 300px;
  height: 200px;
  padding: 30px;
  margin: 10px;
  border: 2px dotted green;
  display: inline-block;
  text-align: left;
`;

const AddBtn = styled.button`
  font-size: 3rem;
  margin: 0 0.1em;
  background-color: transparent;
  outline: none;
  border: 0;
  position: absolute;
  right: 0px;
  bottom: 0px;
  color: green;
  cursor: pointer;
  position: fixed;
`;

export default Home;

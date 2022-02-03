import React from "react";
import styled from "styled-components";
import "./App.css";
import { useDispatch } from "react-redux";
import { addWordFB } from "./redux/modules/word";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const word = React.useRef(null);
  const pinyin = React.useRef(null);
  const meaning = React.useRef(null);
  const exam = React.useRef(null);
  const interpretation = React.useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveWord = () => {
    dispatch(
      addWordFB({
        word: word.current.value,
        pinyin: pinyin.current.value,
        meaning: meaning.current.value,
        exam: exam.current.value,
        interpretation: interpretation.current.value,
      })
    );
    navigate("/");
  };

  return (
    <>
      <AddFormList>
        <h3>단어 추가하기</h3>
        <label>단어</label>
        <Input type="text" ref={word} />
        <label>병음</label>
        <Input type="text" ref={pinyin} />
        <label>의미</label>
        <Input type="text" ref={meaning} />
        <label>예문</label>
        <Input type="text" ref={exam} />
        <label>해석</label>
        <Input type="text" ref={interpretation} />
      </AddFormList>
      <SaveBtn onClick={saveWord}>저장하기</SaveBtn>
    </>
  );
};

const AddFormList = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border-style: none none solid none;
`;

const SaveBtn = styled.button`
  width: 150px;
  height: 30px;
  color: white;
  font-weight: bold;
  background-color: green;
  margin: 30px auto 0 auto;
`;

export default Form;

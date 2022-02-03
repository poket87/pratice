import React from "react";
import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
import { db } from "./firebase";
import { loadWordFB } from "./redux/modules/word";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const [list, setList] = React.useState([
    {
      word: "단어1",
      pinyin: "병음1",
      meaning: "의미1",
      exam: "예문1",
      interpretation: "해석1",
    },
    {
      word: "단어2",
      pinyin: "병음2",
      meaning: "의미2",
      exam: "예문2",
      interpretation: "해석2",
    },
    {
      word: "단어3",
      pinyin: "병음3",
      meaning: "의미3",
      exam: "예문3",
      interpretation: "해석3",
    },
  ]);
  // 파이어스토어에 있는 데이터 받아오기
  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home list={list} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

// word.js
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

const initialState = {
  list: [
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
    {
      word: "단어4",
      pinyin: "병음4",
      meaning: "의미4",
      exam: "예문4",
      interpretation: "해석4",
    },
  ],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  console.log("액션을 실행할꺼야!");
  return { type: CREATE, word };
}

// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));

    let word_list = [];

    word_data.forEach((doc) => {
      word_list.push({ id: doc.id, ...doc.data() });
    });

    console.log(word_list);

    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "word"), word);
    const _word = await getDoc(docRef);
    const word_data = { id: _word.id, ..._word.data() };

    dispatch(createWord(word_data));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list };
    }
    case "word/CREATE": {
      console.log("이제 값을 바꿀꺼야!");
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }
    default:
      return state;
  }
}

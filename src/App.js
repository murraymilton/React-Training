import React, {useState} from 'react';
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("Happy Happy Joy Joy");
  console.log(emotion)
    return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("happy happy joy joy")}>Happy</button>
      <button onClick={() => setEmotion("Frustrated")}>
        Frustrated
        </button>
        <button onClick={() => setEmotion("enthusiastic")}>
         Enthusiastic
        </button>
        <button onClick={() => setEmotion("motivated")}>
        Motivated
        </button>
        <button onClick={() => setEmotion("content")}>
          Content
        </button>
    </>
    );
  }
export default App;

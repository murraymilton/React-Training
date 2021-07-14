import React, {useState, useEffect, useReducer} from 'react';
import "./App.css";

function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  
  return (
    <>
      <input type="checkbox"
       value={checked}  
      onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  ); 
}
export default App;


// Using reducer to take a current state and return a new state.





// function App() {
//   const [emotion, setEmotion] = useState("Happy Happy Joy Joy");
//   const [secondary, setSecondary] = useState("tired")

//   useEffect(() => {
//     console.log(`It's ${emotion} around here!`);
//   }, [emotion]);

//   useEffect(() => {
//     console.log(`It's ${secondary} around here!`);
//   }, [secondary]);
//     return (
//     <>
//       <h1>Current emotion is {emotion} and {secondary}</h1>
//       <button onClick={() => setEmotion("happy happy joy joy")}>
//         Make Happy</button>
//       <button onClick={() => setSecondary("crabby")}>
//       Make crabby
//       </button>
//       <button onClick={() => setEmotion("Frustrated")}>
//         Frustrated
//         </button>
//         <button onClick={() => setEmotion("enthusiastic")}>
//          Enthusiastic
//         </button>
//         <button onClick={() => setEmotion("motivated")}>
//         Motivated
//         </button>
//         <button onClick={() => setEmotion("content")}>
//           Content
//         </button>
//     </>
//     );
//   }
// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

const [, , light ] = ["boots", "tent", "headlamp"]; //Destructing an arrays of objects

ReactDOM.render(<App />,document.getElementById("root"));

import React from 'react';
import './App.css';


function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.name}'s Sweet Sensations</h1>
    </header>
  );
}
function Main(props) {
  return (
    <section>
      <p>We serve {props.adjective} sweet sensational tasting deserts.</p>
    </section>
  );
}
function Footer(props){
  return (
    <footer>
      <p>Since {props.year}</p>
    </footer>

  )
}

function App() {
  return (
    <div className="App">
      <Header name="Horacio"/>
      <Main adjective="Amazing!"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

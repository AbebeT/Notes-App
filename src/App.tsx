import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Compenents/Navbar/Navbar'
import Notes from './Compenents/Notes/Notes'



function App() {

  const [counter, setCounter] = useState(2);

  const manupilateCounter = (COUNTER : number) => {
    console.log("manupilateCounter", COUNTER);
    
    setCounter(COUNTER);

  }
  return (
    <div className="App">
      <Navbar counterState = {counter}/>
      <Notes onCounterChange={manupilateCounter}/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // javascript block]
  const alertMsg = 'Hello wolrd in Alert';
  const [msg, setMsg] = React.useState('Hello world');

  function handleShowingAlertBtnClick(){
    alert(alertMsg)
  }

  function handleTitleChangingBtnClick(){
    setMsg('Hollow ataraxia')
  }


  // Template block
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{msg}</h1>
      <button onClick={handleShowingAlertBtnClick}> Click me to show alert </button>
      <button onClick={handleTitleChangingBtnClick}> Click me to modify the Title </button>
    </div>
  );
}

export default App;

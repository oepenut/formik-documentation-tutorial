import React from 'react';
import logo from '../../logo.svg';
import Basic from '../basic/Basic';
import BasicReduced from '../basic/BasicReduced';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome! Formik</h3>
      </header>
      <main className="Main">
        <h1>Formik Tutorial</h1>
        <div className="Components">
          <Basic />
          <BasicReduced />
        </div>
      </main>
    </div>
  );
}

export default App;

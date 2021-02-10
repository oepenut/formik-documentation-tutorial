import React from 'react';
import logo from '../../logo.svg';
import Basic from '../basic/Basic';
import BasicReduced from '../basic/BasicReduced';
import Form from '../form/Form';
import FormYup from '../form/FormYup';
import FormYupReduced from '../form/FormYupReduced';
import FormFormik from '../form/FormFormik';
import FormUseField from '../form/FormUseField';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome! Formik</h3>
      </header>
      <main className="Main">
        <h1>Formik Basics</h1>
        <div className="Components">
          <Basic />
          <BasicReduced />
        </div>
        <h1>Formik Tutorial</h1>
        <h3>Normal / Yup</h3>
        <div className="Components">
          <Form />
          <FormYup />
        </div>
        <h3>Yup Reduced</h3>
        <div className="Components">
          <FormYupReduced />
        </div>
        <div className="Components">
          <FormFormik />
          <FormUseField />
        </div>
      </main>
    </div>
  );
}

export default App;

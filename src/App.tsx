import React from 'react';
import { Base64 } from 'js-base64';
import logo from './logo.svg';
import './App.css';

function callAPI() {
  // let base64 = require('base64');
  const url = "https://pkc-ymrq7.us-east-2.aws.confluent.cloud:443/";
  let headers = new Headers()
  let username = 'FZS34LZM5GFCKJB7'
  let password = 'trflr169oQTQjM5ERNm9wbPfElOwFKkgVKeK0B7peDMbmipau29iAZiWITOtudCMd '
  headers.append('Authorization', 'Basic' + Base64.encode(username + ":" + password));
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': 'content-type'
    },
    body: JSON.stringify({ title: '"ksql": "DESCRIBE USERS EXTENDED;"' })
};
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <button onClick={callAPI}>Get HttpBin</button>
      </header>
    </div>
  );
}

export default App;

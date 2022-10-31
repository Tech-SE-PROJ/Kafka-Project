import React, {useEffect} from 'react';
import './App.css';

function callAPI() {
  const url = "https://pkc-ymrq7.us-east-2.aws.confluent.cloud:443/ksql";
  let headers = new Headers()
  let username = 'FZS34LZM5GFCKJB7'
  let password = 'trflr169oQTQjM5ERNm9wbPfElOwFKkgVKeK0B7peDMbmipau29iAZiWITOtudCMd '
  headers.append('Authorization', 'Basic' + window.btoa(username + ":" + password));}
//   const requestOptions = {
//     method: 'POST',
//     headers: { 
//       'Content-Type': 'application/vnd.ksql.v1+json; charset=utf-8',
//       //'Access-Control-Request-Headers': 'content-type'
//     },
//     body: JSON.stringify({ ksql: "DESCRIBE USERS EXTENDED;" })
// };

//   //let resp = callAPI()
//   //console.log(resp)
//   const fetchData = async () => {
//     try {
//       const response = await fetch(url, {method: requestOptions.method, headers: requestOptions.headers});
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   fetchData();
// }

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic RlpTMzRMWk01R0ZDS0pCNzp0cmZscjE2OW9RVFFqTTVFUk5tOXdiUGZFbE93RktrZ1ZLZUswQjdwZURNYm1pcGF1MjlpQVppV0lUT3R1ZENN");
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Access-Control-Allow-Origin", "*")
var raw = "{\r\n    \"ksql\": \"DESCRIBE USERS EXTENDED;\"\r\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  //redirect: 'follow'
};

fetch("https://pksqlc-w6265.us-east-2.aws.confluent.cloud:443/ksql", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callAPI}>Get HttpBin</button>
      </header>
    </div>
  );
}

export default App;

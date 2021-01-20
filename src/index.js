import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


class demo{
  hello(){
    var a = 25;
    var b = 30;
    var c = a * b;
    document.getElementById("root").innerHTML = c;
  }
}
var subdemo = new demo();
subdemo.hello();
// ReactDOM.render(subdemo.hello(),document.getElementById("hold"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

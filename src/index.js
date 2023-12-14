import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import Page from './components/Page';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,


} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/home" element={<Home />} />

      <Route path='/page' element={<Page />}>

        <Route path='Page2' element={<Navigate replace to="/Page" />}>
          <Route path='Teen' element={<App />} />
          <Route path='=Adult' element={<App />} />
        </Route>

        <Route path='Page1' element={<Navigate replace to="/Page" />} >
          <Route path='Children' element={<App />} />
          <Route path='Cartoon' element={<App />} />
        </Route>


      </Route>

    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

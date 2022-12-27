import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Technologies/>
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>REACT</li>
      </ul>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <ul>
        <a href='#s'>Home</a>
        <a href='#s'>News Feed</a>
        <a href='#s'>Messages</a>
      </ul>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import About from './components/About';
import DarkMode from './components/DarkMode';
// import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
// import Card from './components/Card';
import TextArea from './components/TextArea';

import PropTypes from 'prop-types'



function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark")
     
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode("light");
     document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
      <TextArea mode={mode} />
      {/* <About/> */}
      <DarkMode />
    </>

  );
}
Navbar.prototype = {
  title: PropTypes.string
}

export default App;

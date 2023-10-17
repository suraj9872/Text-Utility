import { useState } from 'react';
import './App.css';
import About from './components/About';
import DarkMode from './components/DarkMode';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import PropTypes from 'prop-types'
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  // for dark mode
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark")

      document.body.style.backgroundColor = '#1a1a1a';
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = '#f2f2f2';
      showAlert("Dark mode has been disabled","success");
    }

  }

  const showAlert=(msg, type)=>{
    setAlert({
      msg: msg,
      type: type
    })
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alertmsg={alert} />
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

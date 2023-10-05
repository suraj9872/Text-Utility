import './App.css';
// import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
// import Card from './components/Card';
import TextArea from './components/TextArea';

import PropTypes from 'prop-types'



function App() {
  return (
    <>
  <Navbar title="Choose Trip"/>
  <TextArea/>
    </>
    
  );
}
Navbar.prototype={
  title: PropTypes.string
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Main from './Components/Main';
import Nav from './Components/Nav'
import Modal from './Components/Modal'

/*
 In terms of the location text, I chose to use a navbar so I could separate them and create a specific component for the cards, for the data and for the API. I could have also just used simple text tags and then a <hr> for the bottom border per say.

*/




function App() {

  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };
  
  return (
    <div>
    <div className="App">
      <Nav/>
    </div>
    {showModal ? <Modal setShowModal={setShowModal} /> : null}
    <div className="card-component-main">
      <Main/>
    </div>
   
    </div>
  );
}

export default App;


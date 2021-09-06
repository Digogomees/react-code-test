import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from "react-dom";
import '../css/modal.css';
import Main from '../Components/Main'

 const Modal = ({ setShowModal, id, userCount, createdAt  }) => {

    const modalRef = useRef();
    const [view] = useState(parseInt(localStorage.getItem(id)) || 0);

    const url = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";

    const [locations, setLocations] = useState(null);
   

    const formatTime = (dateStr) =>{
      const time = dateStr.split("T")[1].split(".")[0].slice(0,5)
      return time;
   }



    // Closes the modal when clicking outside of it
    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setShowModal(false)
        }
    }
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setLocations(response.data)
        })
  
    }, [url]);

    // Rendering the modal JSX in the portal div
    return ReactDOM.createPortal(
        
        <div className="modal-container" ref={modalRef} onClick={closeModal}>
            {locations ? locations.map((location) => (
            <div className="modal">
            
            
            <div className="modal-header-wrapper">
                        <header>
                            <h1 className="title">Acme HQ</h1>
                        </header>
                        </div>
                        <div className="modal-wrapper">
                        <div className="users">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Users_skb8o5.svg"/><p>{location.userCount} users</p>
                        </div>

                        <div className="date">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Timezone_lwh7iz.svg"/><p className="date">{formatTime(location.createdAt)} (GMT+01:00)</p>
                        </div>

                        <div className="views">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Views_tdmyso.svg"/> <p>{view} views</p>
                        </div>
                    </div>
                <button onClick={() => setShowModal(false)}>X</button>

                <div className="description">
                    <h1 className="title">Description</h1>
                    <p></p>
                </div>
            
            
            
            </div>
            )) : (<h1></h1>) }
            </div>
            
        ,
        document.getElementById("portal")
    );
};

export default Modal;

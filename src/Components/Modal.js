import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from "react-dom";
import '../css/modal.css';
import url from '../utils/Constants'
import formatTime from '../utils/Date.helper'
import apiFetch from '../utils/ApiFetch';

 const Modal = ({ viewCard, users, setShowModal, closeModal, description, name  }) => {

    const modalRef = useRef();

    const [locations, setLocations] = useState(null);
 


    // Closes the modal when clicking outside of it
    function handleChangeModal (){
    }


    useEffect(() => {
        axios.get(url)
        .then(response => {
            setLocations(response.data)
        })
  
    }, [url]);


    // Rendering the modal JSX in the portal div
    return ReactDOM.createPortal(
        
        <div className="modal-container" ref={modalRef} onClick={handleChangeModal} key="modal">
            {locations ? locations.map((location) => (
            <div className="modal">
            
            
            <div className="modal-header-wrapper" >
                        <header>
                            <h1 className="title">{name}</h1>
                        </header>
                        </div>
                        <div className="modal-wrapper" id={location.id}>
                        <div className="users">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Users_skb8o5.svg" alt="users"/><p>{users} users</p>
                        </div>

                        <div className="date">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Timezone_lwh7iz.svg" alt="date"/><p className="date">{formatTime(location.createdAt)} (GMT+01:00)</p>
                        </div>

                        <div className="views">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Views_tdmyso.svg" alt="views"/> <p>{viewCard} views</p>
                        </div>
                    </div>
                    <div onClick={closeModal}>
                    <button onClick={closeModal}><img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Close_h2hs1a.svg"/></button>
                        </div>
                

                <div className="description">
                    <h1 className="title">Description</h1>
                    <p className="paragraph">{description}</p>
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

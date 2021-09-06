import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../css/card.css';
import Modal from './Modal'

function Card({ id, userCount, createdAt }) {

    const [view, setViewCount] = useState(parseInt(localStorage.getItem(id)) || 0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        localStorage.setItem(id, view.toString())
    }, [view])
    

    const openModal = () => {
        setShowModal(true);
      };

     
    const modal = () => {
        setViewCount(v => v + 1);
        setShowModal(true)
    }

 

    return(
        <div className="card" onClick={modal}>
            <div className="card-container">
            {showModal ? <Modal setShowModal={setShowModal} /> : null}
                    <div id={id}>
                        <header>
                            <h1 className="title">Acme HQ</h1>
                        </header>
                        <div className="users">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Users_skb8o5.svg"/><p>{userCount} users</p>
                        </div>

                        <div className="date">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Timezone_lwh7iz.svg"/><p className="date">{createdAt} (GMT+01:00)</p>
                        </div>


                        <div className="views">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Views_tdmyso.svg"/> <p>{view} views</p>
                        </div>
                    </div>
            </div>
        </div>
    )
  }

  export default Card;
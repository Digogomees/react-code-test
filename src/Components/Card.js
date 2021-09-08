import React, {useEffect, useState} from 'react'
import '../css/card.css';
import Modal from './Modal'

function Card({ id, userCount, createdAt, description, name}) {

    // Instanciating states and variables
    const [view, setViewCount] = useState(parseInt(localStorage.getItem(id)) || 0);
    const [showModal, setShowModal] = useState(false);

    // Hook to store the view count to the localStorage.
    useEffect(() => {
        localStorage.setItem(id, view.toString())
    }, [view])
    
    const modal = () => {
        setViewCount(v => view + 1);
        setShowModal(prev => !prev)
    }
    
 

    return(
        <div className="card" onClick={modal}>
            <div className="card-container">
            {showModal ? <Modal users={userCount} showModal={showModal} closeModal={ ()=> setShowModal(false)} name={name} description={description} viewCard={view}/> : null}
                    <div id={id}>
                        <header>
                            <h1 className="title">Acme HQ</h1>
                        </header>
                        <div className="users">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Users_skb8o5.svg" alt="users"/><p>{userCount} users</p>
                        </div>

                        <div className="date">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Timezone_lwh7iz.svg" alt="date"/><p className="date">{createdAt} (GMT+01:00)</p>
                        </div>


                        <div className="views">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Views_tdmyso.svg" alt="views"/> <p>{view} views</p>
                        </div>
                    </div>
            </div>
        </div>
    )
  }

  export default Card;
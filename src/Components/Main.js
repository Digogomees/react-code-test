import React, {useEffect, useState} from 'react'
import axios from "axios"
import Card from './Card'
import Modal from './Modal';

function Main() {
    const url = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";

    const [locations, setLocations] = useState(null);
    const count = useState(0);

    const formatTime = (dateStr) =>{
      const time = dateStr.split("T")[1].split(".")[0].slice(0,5)
      return time;
   }


    

   
  
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setLocations(response.data)
        })
  
    }, [url]);

    return (
      <div className="card-component" >
        {locations ? locations.map((location) => (
          <div>
              <Card  id={location.id}
                    count={count}
                    userCount={location.userCount}
                    createdAt={formatTime(location.createdAt)}/>
          </div> 
        )) : (
          <h1>error</h1>
        )}
      </div>
      
      )
}

export default Main

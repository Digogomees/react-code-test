import React, {useEffect, useState} from 'react'
import axios from "axios"
import Card from './Card'
import DateHelper from '../utils/Date.helper';
import url from '../utils/Constants';

function Main() {

    const [locations, setLocations] = useState(null);
    const count = useState(0);

  
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setLocations(response.data)
        })
  
    }, [url.id]);
    

    return (
      <div className="card-component" >
        {locations ? locations.map((location) => (
          <div>
              <Card key={location.id}
                    count={count}
                    name={location.name}
                    description={location.description}
                    userCount={location.userCount}
                    createdAt={DateHelper(location.createdAt)}/>
          </div> 
        )) : (
          <h1>error</h1>
        )}
      </div>
      
      )
}

export default Main

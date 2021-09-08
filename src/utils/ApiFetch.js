import axios from 'axios';
import url from './Constants';
import {useEffect, useState} from 'react';

function fetchApi () {

    const [locations, setLocations] = useState(null);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setLocations(response.data)
        })
  
    }, [url]);
}



export default fetchApi;
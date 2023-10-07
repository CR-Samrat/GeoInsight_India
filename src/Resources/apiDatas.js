import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YourComponent(props) {
  const [data, setData] = useState([]);
  const apiUrl = localStorage.getItem('myApi');
  useEffect(() => {
    // Define the API URL
    
    // setData(props.data)

    //console.log(data+"Edited");
    //'https://api.data.gov.in/resource/0cde42d3-5f49-4d2a-996c-4dfc4b2e2596?api-key=579b464db66ec23bdd00000125513b3ec8994de655a472e69ce5f96f&format=json&limit=29';
    //'https://api.data.gov.in/resource/4462bd51-65e5-44c1-a4f0-7cd22a51925c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=30';
    //'https://api.data.gov.in/resource/2e0139a4-d59b-44d8-b7d5-a506c5a093c2?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';


    // change 1
    // Make a GET request to the API using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        setData(response.data.records); // Assuming "records" is the data you want to extract from the response

        // Store the data in local storage
        localStorage.setItem('myData', JSON.stringify(response.data.records));
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]); // The empty dependency array [] means the effect runs once after the initial render

  //console.log(data)

  return (
    <div>
    </div>
  );
}

export default YourComponent;

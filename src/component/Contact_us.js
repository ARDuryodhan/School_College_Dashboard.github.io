import React, { useEffect } from "react";
import Select from "react-select";


function Contactus() {
  let API='https://country-state-city-search-rest-api.p.rapidapi.com/allcountries';

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url, {
        headers: {
          'X-RapidAPI-Key': 'b58149266mshfdf0b4f4106a165p1f0ecbjsnf867bf2070f2', // Replace with your actual RapidAPI key
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
   useEffect(() => {
    fetchApiData(API);
  }, [API]); 



  // const url = 'https://country-state-city-search-rest-api.p.rapidapi.com/allcountries';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b09885bccdmshc32a0f9e436eceap19f4dbjsnc21e750f4ce5',
// 		'X-RapidAPI-Host': 'country-state-city-search-rest-api.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = async. fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



  return (
    <div className="contactus-container">
      <div className="contactus_title">
        <h3>Looking for better career option? But confused!</h3>
        <h5>Talk to expert counsellors & secure an admission now!</h5>
      </div>
      <div className="contactus_form">
        <form>
          <label>
            Name:
            <input
              className="form-control"
              type="text"
              name="name"
              required
              placeholder="Enter full name"
            />
          </label>
          <label>
            Mobile :
            <input
              className="form-control"
              type="numbe"
              name="number"
              required
              placeholder="Enter mobile number"
            />
          </label>
          <label>
            Email:
            <input
              className="form-control"
              type="email"
              name="email"
              required
              placeholder="Enter email address"
            />
          </label>
          <label>
            State:
            <Select name="state" />
          </label>
          <label>
            City:
            <Select name="city" />
          </label>
          <label></label>
          <button className="btn btn-primary" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;

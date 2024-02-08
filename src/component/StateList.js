import React, { useState } from "react";

const StateList = () => {

  const countries = ["India"];
  const states = {
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
  };
  const cities = {
    AndhraPradesh: ["Visakhapatnam", "Vijayawada", "Guntur"],
    ArunachalPradesh: ["Itanagar", "Naharlagun"],
    Assam: ["Guwahati", "Dibrugarh", "Silchar"],
    Bihar: ["Patna", "Gaya", "Muzaffarpur"],
    Chhattisgarh: ["Raipur", "Bilaspur"],
    Goa: ["Panaji", "Vasco_da_Gama"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Haryana: ["Chandigarh", "Faridabad", "Gurgaon"],
    HimachalPradesh: ["Shimla", "Manali"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
    Karnataka: ["Bangalore", "Mysuru", "Mangaluru"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    MadhyaPradesh: ["Bhopal", "Indore", "Jabalpur"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Manipur: ["Imphal"],
    Meghalaya: ["Shillong"],
    Mizoram: ["Aizawl"],
    Nagaland: ["Kohima"],
    Odisha: ["Bhubaneswar", "Cuttack"],
    Punjab: ["Amritsar", "Ludhiana"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
    Sikkim: ["Gangtok"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
    Telangana: ["Hyderabad", "Warangal"],
    Tripura: ["Agartala"],
    UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
    Uttarakhand: ["Dehradun", "Haridwar"],
    WestBengal: ["Kolkata", "Howrah", "Durgapur"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  };
  

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
  };

  

  return (
    <div className="refine_container">
      <div id="SelectCSC">
        <div>
          <label>Select Country:</label>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="" disabled>
              Select Country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Select State:</label>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="" disabled>
              Select State
            </option>
            {selectedCountry &&
              states[selectedCountry].map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label>Select City:</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="" disabled>
              Select City
            </option>
            {selectedState &&
              cities[selectedState].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        
      </div>
    </div>
  );
};

export default StateList;

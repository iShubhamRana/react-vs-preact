import React, { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(async () => {
    try {
      await fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          const arr = [];
          for(let i=0;i<40;i++){
            arr.push(...data);
          }
          setCountries(arr);
        });
    } catch (err) {}
  }, []);
  return (
    <div>
      <ul>
        <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button onClick={()=>{
            setCountries([...countries, {name: {common: inputValue}}])
           setInputValue("") 
        }}>Add</button>
        {countries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

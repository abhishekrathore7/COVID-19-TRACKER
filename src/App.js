import React, {useState, useEffect} from 'react';
import './App.css';
import{
  MenuItem,FormControl,Select
} from "@material-ui/core";
import Infobox from './Infobox';
import Map from './Map';
function App() {

  
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
      });
    };
    getCountriesData();
    
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };
  return (
    <div className="app">
    <div className = "app__header">
    <h1>COVID-19 TRACKER</h1>
      <FormControl className = "app__dropdown">
      <Select variant = "outlined" onChange = {onCountryChange} value = {country}>
        <MenuItem value = "worldwide">Worldwide</MenuItem>
        {

        countries.map(country => (
         <MenuItem value= {country.value} > {country.name} </MenuItem>

      ))
        }
      {/* <MenuItem value = "worldwide">worldwide</MenuItem>
      <MenuItem value = "worldwide">worldwide1</MenuItem>
      <MenuItem value = "worldwide">worldwide2</MenuItem>
      <MenuItem value = "worldwide">worldwide3</MenuItem> */}
    </Select>
    </FormControl>
</div>
<div className = "app__stats">
  <Infobox title = "Coronavirus Cases" cases= {1234} total = {2000} />
  <Infobox title = "Recovered" cases = {123456} total = {3000}/>
  <Infobox title = "Deaths" cases = {1245795} total = {4000} />
</div>
<Map />
</div>
  );
}

export default App;

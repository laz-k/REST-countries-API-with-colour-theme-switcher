import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

export default function Home() {

	const [inputCountry, setInputCountry] = useState("");
	const [countries, setCountries] = useState([]);
  const [selectRegion, setSelectRegion] = useState("All")

	useEffect(() => {
    if (selectRegion === "All"){
      getCountries()
    } else {
      fetch(`https://restcountries.eu/rest/v2/region/${selectRegion}`)
			.then(res => res.json())
			.then(data => {
        setCountries(data);
			});
    }
	},[selectRegion]);


	const getCountries = async() => {
		const res = await fetch(`https://restcountries.eu/rest/v2/all`)
		const data = await res.json()
		await setCountries(data)
	}

  const handleChange = (e) => {
    setInputCountry(e.target.value)
  }

  const selectChange = (e) => {
    setSelectRegion(e.target.value)
  }

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(inputCountry.toLowerCase())
    )
    
    const results = filteredCountries.map((country,index) => {
      return (
      <Card country={country} key={index}/>
      ) 
    })
    
	return (
		<>
			<div className="columns is-flex-direction-row	is-justify-content-space-around">
				<div className="field ">
					<p className="control has-icons-left">
						<input className="input" type="text" placeholder="Look for a country..." onChange={handleChange} ></input>
						<span className="icon is-left">
							<i className="fas fa-search"></i>
						</span>
					</p>
				</div>
				<div className="select">
					<select id="regions" onChange={selectChange}>
						<option value="All">Filter By Region</option>
						<option value="Africa">Africa</option>
						<option value="Americas">America</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</div>
			<div className="container grid">
			{results}
      </div>
		</>
	);
}

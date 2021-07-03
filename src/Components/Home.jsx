import { useState, useEffect } from "react";
import Card from "./Card";

export default function Home() {

	const [inputCountry, setInputCountry] = useState("");
	const [countries, setCountries] = useState([]);
  

	useEffect(() => {
		fetch(`https://restcountries.eu/rest/v2/all`)
			.then(res => res.json())
			.then(data => {
				setCountries(data);
			});
	},[]);

  const handleChange = (e) => {
    setInputCountry(e.target.value)
  }

  const results = countries.map((country,index) => {
    return <Card country={country} key={index} />
  })

	return (
		<>
			<div className="columns is-flex-direction-row	is-justify-content-space-around">
				<div className="field ">
					<p className="control has-icons-left">
						<input className="input" type="text" placeholder="Country..." onBlur={handleChange} ></input>
						<span className="icon is-left">
							<i className="fas fa-search"></i>
						</span>
					</p>
				</div>
				<div className="select">
					<select id="regions">
						<option defaultValue="All Regions">Filter By Region</option>
						<option value="Africa">Africa</option>
						<option value="America">America</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</div>
			<div className="container">
        <div className="grid">{results}</div>
      </div>
		</>
	);
}

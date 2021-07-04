import Error from "../Components/Error"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
const commaNumber = require('comma-number')


export default function CountryDetails() {
	const { id } = useParams();
	const [details, setDetails] = useState([]);

	useEffect(() => {
		fetch(`https://restcountries.eu/rest/v2/name/${id}`)
			.then(res => res.json())
			.then(data => {
				setDetails(data[0]);
			})
			.catch((err) => {
				console.log(err);
			})
	}, [id]);




	if (details) {
		return (
			<>
				<div className="container">
					<Link to="/">
						<button className="button">
							<span className="icon">
								<i className="fas fa-arrow-left"></i>
							</span>
							<span>Back</span>
						</button>
					</Link>
					<div className="columns">
						<div className="column is-6 mt-6">
							<img src={details.flag} alt="Flag" />
						</div>
						{/* {details.map(country => <h4>{country.name}</h4> )} */}
						<div className="column is-6 mt-6">
							<h2 className="detail-text is-size-2"> <span> {details.name}</span></h2>
							<h3 className="detail-text">Native name: <span> {details.nativeName}</span></h3>
							<h3 className="detail-text">Population: <span> {commaNumber(details.population)}</span></h3>
							<h3 className="detail-text">Region: <span> {details.region}</span></h3>
							<h3 className="detail-text">Subregion: <span> {details.subregion}</span></h3>
							<h3 className="detail-text">Capital: <span> {details.capital}</span></h3>
							<h3 className="detail-text">Top Level Domain: <span> {details.topLevelDomain}</span></h3>
							{/* <h3 className="detail-text"><strong>Currencies:</strong> {details.currencies.map(c => c.name)}</h3> */}
							{/* <h3 className="detail-text"><strong>Native name:</strong> {details.languages}</h3> */}
						</div>
					</div>
				</div>
			</>
		);
	} else {
    return <Error />
  }
}

import { Link, useLocation } from "react-router-dom";
const commaNumber = require('comma-number')


export default function CountryDetails() {
	
	let {countries} = useLocation()
	let {singleCountry} = useLocation()

	const languages = singleCountry.languages
	.map(lan => lan.name)
	.toString()
	.split(",")
	.join(", ");

const borderCountries = singleCountry.borders.map(border => border);
let borderCountriesNames = [];

const getNames = (arr1, arr2) => {
	arr1.forEach(name => {
		arr2.forEach(item => {
			if (item.alpha3Code === name) {
				borderCountriesNames.push(item.name);
			}
		});
	});
};

getNames(borderCountries, countries);

if (borderCountriesNames.length === 0) {
	borderCountriesNames.push("None. It's an island");
}

console.log(borderCountriesNames);

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
							<img src={singleCountry.flag} alt="Flag" />
						</div>
						<div className="column is-6 mt-6">
							<h2 className="detail-text is-size-2"> <span> {singleCountry.name}</span></h2>
							<h3 className="detail-text">Native name: <span> {singleCountry.nativeName}</span></h3>
							<h3 className="detail-text">Population: <span> {commaNumber(singleCountry.population)}</span></h3>
							<h3 className="detail-text">Region: <span> {singleCountry.region}</span></h3>
							<h3 className="detail-text">Subregion: <span> {singleCountry.subregion}</span></h3>
							<h3 className="detail-text">Capital: <span> {singleCountry.capital}</span></h3>
							<h3 className="detail-text">Top Level Domain: <span> {singleCountry.topLevelDomain}</span></h3>
							<h3 className="detail-text"><strong>Currencies:</strong> {singleCountry.currencies.map(c => c.name)}</h3>
							<h3 className="detail-text"><strong>Languages:</strong> {languages}</h3>
						</div>
					</div>
				</div>
			</>
		);
}

import { Link, useLocation } from "react-router-dom";
const commaNumber = require("comma-number");

export default function CountryDetails() {
	let { countries } = useLocation();
	let { singleCountry } = useLocation();

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
			<div className="container is-fullhd px-5">
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
						<figure className="image is-fullwidth">
							<img src={singleCountry.flag} alt="Flag" />
						</figure>
					</div>
					<div className="column is-6 mt-6">
						<h2 className="detail-text is-size-2">{singleCountry.name}</h2>
						<h3 className="detail-text">
							Native name: <span> {singleCountry.nativeName}</span>
						</h3>
						<h3 className="detail-text">
							Population: <span> {commaNumber(singleCountry.population)}</span>
						</h3>
						<h3 className="detail-text">
							Region: <span> {singleCountry.region}</span>
						</h3>
						<h3 className="detail-text">
							Subregion: <span> {singleCountry.subregion}</span>
						</h3>
						<h3 className="detail-text">
							Capital: <span> {singleCountry.capital}</span>
						</h3>
						<h3 className="detail-text">
							Top Level Domain: <span> {singleCountry.topLevelDomain}</span>
						</h3>
						<h3 className="detail-text">
							Currencies: <span key={singleCountry.alpha2Code} className="currencies"> {singleCountry.currencies.map(c => c.name)}</span>
						</h3>
						<h3 className="detail-text">
							Languages: <span key={singleCountry.alpha2Code}>{languages}</span>
						</h3>
						<div className="columns">
							<div className="column">
								<h2 className="detail-text is-size-4 mt-4">Border Countries: </h2>
								<div className="borders-container">
									{borderCountriesNames.map(border => (
										<span key={border.alpha2Code} className="borders">
											{border}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

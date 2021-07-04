import { Link, useLocation } from "react-router-dom";
const commaNumber = require('comma-number')


export default function CountryDetails() {
	// const { id } = useParams();
	// const [details, setDetails] = useState([]);

	// useEffect(() => {
	// 	fetch(`https://restcountries.eu/rest/v2/name/${id}`)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setDetails(data[0]);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		})
	// }, [id]);

let {allCountries} = useLocation()
let {singleCountry} = useLocation()

let languages = []

		// allCountries.forEach(entry => {
		// 	singleCountry.languages.map(lang => {
		// 		if (entry.includes(lang.name)) {
		// 				languages.push(lang.name)
		// 		}
		// 		return languages
		// 	})
		// })

		console.log(allCountries.forEach(code => code.alpha3Code
		));

	// console.log(singleCountry.languages.map(lan=>lan.name));

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
						{/* {singleCountry.map(country => <h4>{country.name}</h4> )} */}
						<div className="column is-6 mt-6">
							<h2 className="detail-text is-size-2"> <span> {singleCountry.name}</span></h2>
							<h3 className="detail-text">Native name: <span> {singleCountry.nativeName}</span></h3>
							<h3 className="detail-text">Population: <span> {commaNumber(singleCountry.population)}</span></h3>
							<h3 className="detail-text">Region: <span> {singleCountry.region}</span></h3>
							<h3 className="detail-text">Subregion: <span> {singleCountry.subregion}</span></h3>
							<h3 className="detail-text">Capital: <span> {singleCountry.capital}</span></h3>
							<h3 className="detail-text">Top Level Domain: <span> {singleCountry.topLevelDomain}</span></h3>
							<h3 className="detail-text"><strong>Currencies:</strong> {singleCountry.currencies.map(c => c.name)}</h3>
							<h3 className="detail-text"><strong>Languages:</strong> {singleCountry.languages.map(lan => lan.name)}</h3>
						</div>
					</div>
				</div>
			</>
		);
}

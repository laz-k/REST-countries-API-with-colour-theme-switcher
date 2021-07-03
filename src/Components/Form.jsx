import React from "react";

export default function Form({ query, setQuery, countryName, setCountryName }) {
	function updateInputText(e) {
		setCountryName(e.target.value);
		setQuery(e.target.value);
	}

	return (
		<div>
			<form className="row justify-content-between d-flex align-items-center">
				<div className="col-md-3">
					<div className="input-group">
						<label htmlFor="search-input"></label>
						<span className="input-group-text fas fa-search"></span>
						<input
							className="form-control"
							id="inputCountry"
							name="inputCountry"
							type="text"
							value={countryName}
							placeholder="Country name..."
							required
							onChange={updateInputText}
						/>
					</div>
				</div>
				<div className="col-md-3 d-flex align-items-center">
					<label htmlFor="regions"></label>
					<select className="form-select " id="regions">
						<option defaultValue="All Regions">Filter By Region</option>
						<option value="Africa">Africa</option>
						<option value="America">America</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</form>
		</div>
	);
}

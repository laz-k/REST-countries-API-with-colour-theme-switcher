import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({theme, toggleTheme}) {
	const [isChecked, setIsChecked] = useState(false);


	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};


  console.log(theme)
	return (
		<>
			<nav className="navbar " role="navigation" aria-label="main navigation">
				<Link className="nav-title has-text-weight-bold	is-size-4 has-text-white" to="/">
					Where in the world?
				</Link>
				<div className="toggle-container">
					<input type="checkbox" className="checkbox" id="check" checked={isChecked} onChange={handleOnChange} />
					<label className="switch-container" htmlFor="check" onClick={toggleTheme}>
						<i className="fas fa-sun"></i>
						<i className="fas fa-moon"></i>
						<div className="switch"></div>
					</label>
					<label htmlFor="check">
						<span className="d-mode has-text-weight-bold">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
					</label>
				</div>
			</nav>
		</>
	);
}

// eslint-disable-next-line no-lone-blocks
{
	/* <button className="dark-mode-btn button" type="submit">
<span className="icon">
  <i className="fas fa-toggle-on"></i>
</span>
<span>Dark Mode</span>
</button> */
}

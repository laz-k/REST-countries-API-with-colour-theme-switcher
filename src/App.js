import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkMode } from "./Styles/DarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./Styles/globalStyles";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CountryDetails from "./Pages/CountryDetails";
import Page404 from "./Pages/Page404";

const StyledApp = styled.div`
	color: ${props => props.theme.fontColor};
`;

function App() {
	const [theme, toggleTheme] = DarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<StyledApp>
				<GlobalStyles />
				<Router>
					<Navbar theme={theme} toggleTheme={toggleTheme} />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/country/:id">
							<CountryDetails />
						</Route>
						<Route path="">
							<Page404 />
						</Route>
					</Switch>
				</Router>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;

import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "white !important",
	fontColor: "black !important",
};

export const darkTheme = {
	body: "#202c37 !important",
	fontColor: "white !important",
};

export const GlobalStyles = createGlobalStyle`

	body {
		background-color: ${(props) => props.theme.body}
	}

`
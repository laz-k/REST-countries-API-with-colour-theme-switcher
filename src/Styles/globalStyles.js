import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
  }
  .navbar {
    background: ${({ theme }) => theme.primary};
  }
  .nav-title {
    color: ${({ theme }) => theme.text};
  }
  .d-mode {
    color: ${({ theme }) => theme.text};
  }
  .fa-sun {
    color: ${({ theme }) => theme.icon};
  }
  .fa-moon {
    color: ${({ theme }) => theme.icon};
  }
  .switch-container {
    background: ${({ theme }) => theme.switchBack};
  }
  .switch {
    background: ${({ theme }) => theme.switch};
  }

  .input {
    background: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.text};
  }

  .input::placeholder {
    color: ${({ theme }) => theme.text};
  }
  
  .fa-search {
    color: ${({ theme }) => theme.text};
  }
  #regions {
    background: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.text};
  }

  .select:not(.is-multiple):not(.is-loading)::after {
	  border-color: ${({ theme }) => theme.text};
}

`

export const lightTheme = {
  body: "rgb(245,245,245)",
  text: "black !important",
  primary: "white",
  switchBack: "black",
  icon: "white",
  switch: "white",
  input: "white"
}

export const darkTheme = {
  body: "#202c37",
  text: "white !important",
  icon: "#2b3945",
  switchBack: "white",
  switch: "#202c37",
  input: "#2b3945"
}
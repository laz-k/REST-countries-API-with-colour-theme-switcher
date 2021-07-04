import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html{
    background: ${({ theme }) => theme.body};
  }

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

.card {
  background: ${({ theme }) => theme.primary};
}

.card h3, .card h5{
  color: ${({ theme }) => theme.text};
}

.fa-arrow-left {
  color: ${({ theme }) => theme.text};
}

.button{
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
}

.detail-text {
  color: ${({ theme }) => theme.text};
}

strong {
  color: ${({ theme }) => theme.text};
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
  primary: "#2b3945",
  icon: "#2b3945",
  switchBack: "white",
  switch: "#202c37",
  input: "#2b3945"
}
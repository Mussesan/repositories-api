import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&family=Quantico:wght@400;700&display=swap');

  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.gray600};
    font-family: ${(props) => props.theme.fontFamily.quantic};
    padding: 0px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`;

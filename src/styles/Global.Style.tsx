import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #494949;
    --secondary:  #ccc;
    --third: #aaa;
    --on-primary: #fafafa;
    --on-secondary: #000504;
    --buttonEnter: #5cb86f;
    --buttonLogout: #b85c5c;
    --error: #f00;
}

* {

    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
    border: 0;
    box-sizing: border-box;
}
*::before,
::after {
    box-sizing: inherit;
}

html,
body {
    min-width: 100vh;
    min-height: 100vh;
    overflow: hidden;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
}
`;

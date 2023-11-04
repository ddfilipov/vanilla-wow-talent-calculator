import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
    html {
        height: 100%;
        box-sizing: border-box;
        font-size: 16px;
        font-family: "Open Sans", Arial, "Helvetica Neue", Helvetica, sans-serif;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        height: 100%;
        background-color: #121822;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ol,
    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    * {
        --main-area-background: #050c18;
        --main-area-border: #212e46;
        --capped-node-color: rgba(255, 209, 0, 0.8);
        --uncapped-node-color: rgba(64, 191, 64, 0.8);
        --icon-border-color: #717171;
        --learnable-talent: #1eff00;
        --tooltip-description: #ffd100;
        --tooltip-rank: #9d9d9d;
        color: white;
    }
`;

export default GlobalStyle;

const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Formular';
        src: url('Formular-Light.eot');
        src: local('Formular Light'), local('Formular-Light'),
            url('./fonts/Formular-Light.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Formular-Light.woff2') format('woff2'),
            url('./fonts/Formular-Light.woff') format('woff'),
            url('./fonts/Formular-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Formular';
        src: url('Formular.eot');
        src: local('Formular'),
            url('./fonts/Formular.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Formular.woff2') format('woff2'),
            url('./fonts/Formular.woff') format('woff'),
            url('./fonts/Formular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Formular';
        src: url('Formular-Medium.eot');
        src: local('Formular Medium'), local('Formular-Medium'),
            url('./fonts/Formular-Medium.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Formular-Medium.woff2') format('woff2'),
            url('./fonts/Formular-Medium.woff') format('woff'),
            url('./fonts/Formular-Medium.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Formular';
        src: url('Formular-Black.eot');
        src: local('Formular Black'), local('Formular-Black'),
            url('./fonts/Formular-Black.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Formular-Black.woff2') format('woff2'),
            url('./fonts/Formular-Black.woff') format('woff'),
            url('./fonts/Formular-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: inherit;
        vertical-align: bottom;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        font-family: 'Formular', Arial, Helvetica, sans-serif, sans-serif;
        line-height: 1.4;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`
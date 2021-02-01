import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import GlobalStyle from './Styles/globalStyle';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Routes />
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();

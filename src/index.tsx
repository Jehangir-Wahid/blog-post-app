import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import "./scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();

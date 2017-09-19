// @flow
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// import App from "./components/App";
// import configureStore from "./store/configureStore";
// import rootReducer from "./reducers";

// let store = configureStore(rootReducer);

render(
    <div className="body">
        Hello world
    </div>,
    document.getElementById("app")
);

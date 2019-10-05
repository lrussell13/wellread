import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ProgressBar from '../Components/ProgressBar/ProgressBar';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <ProgressBar />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})
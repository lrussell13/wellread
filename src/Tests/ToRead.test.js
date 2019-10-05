import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ToRead from '../Components/ToRead/ToRead';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <ToRead />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})
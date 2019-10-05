import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Current from '../Components/Current/Current';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Current />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})
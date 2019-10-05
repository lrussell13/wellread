import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import History from '../Components/History/History';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <History />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import FinishBook from '../Components/FinishBook/FinishBook';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <FinishBook />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})
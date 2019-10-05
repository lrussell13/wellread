import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BookSearch from '../Components/BookSearch/BookSearch';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <BookSearch />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})
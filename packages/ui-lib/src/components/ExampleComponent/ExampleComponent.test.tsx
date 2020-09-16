import React from "react";
import ReactDOM from "react-dom";
import {ExampleComponent} from "./ExampleComponent";

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ExampleComponent text={"test"} />, div);
});

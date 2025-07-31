import React from "react";
import ReactDOM from "react-dom/client";

// Build html element using Javascript
// const heading = document.createElement("h1")
// heading.innerHTML = "Hello world from Javascript";
// const root = document.getElementById("root");
// root.appendChild(headin
// Build html element using React Element (ESM)


// Single React Element
// const heading = React.createElement("h1", {"id":"heading"}, "Hello world from React Element");

// Nested React Components
const nestedElements = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "H1 Tag"),
        React.createElement("h2", {}, "H2 Tag"),
    ]
    ));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElements);

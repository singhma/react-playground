import React from "react";
import ReactDOM from "react-dom/client";

// React Element ==> JS object ==> when this object is rendered ((replaced)) to DOM using (root.render)  ==> then it converts this object HTML Element
const heading = React.createElement("h1",{"id":"heading"},"React Element created using `React.createElement i.e. core react`")

// JSX ==> transpiled (by Babel) to React.CreateElement ==> JS object ==> when this object is rendered ((replaced)) to DOM using (root.render)  ==> then it converts this object HTML Element
// == Javascript syntax or HTML / XML like syntax to create React 
// == JSX in not HTML inside JS
// JSX Heading
const heading2 = <h2 id="heading2">React Element created using JSX syntax 🚀</h2>
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(heading)
console.log(heading2)
root.render(heading2)

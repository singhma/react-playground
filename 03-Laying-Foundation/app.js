import React from "react";
import ReactDOM from "react-dom/client";

// React Element ==> JS object ==> when this object is rendered ((replaced)) to DOM using (root.render)  ==> then it converts this object HTML Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React Element created using `React.createElement i.e. core react`"
);

/* 

JSX ==> transpiled (by Babel) to React.CreateElement ==> JS object ==> when this object is rendered ((replaced)) to DOM using (root.render)  ==> then it converts this object HTML Element
== Javascript syntax or HTML / XML like syntax to create React 
== JSX in not HTML inside JS
JSX attributes is always in camelCase Notation
JSX code in multiple lines needs to be wrapped with ()

*/

// JSX Heading
const heading2 = (
  <h2 id="heading2" className="root" tabIndex="1">
    React Element created using JSX syntax 🚀
  </h2>
);

/****
 *
 * React Component : Class Component vs Functional Based React Components
 *
 * Class Based - Old Way of writing code, hardly used nowdays
 * Functional Based
 *   - Function returning JSX Element is Functional React Element
 *
 */

// Demo of Functional React Component

const Title = () => {
  return <h1 className="title">Namaste React using JSX</h1>;
};

const heading4 = (
  <h4>
    React element - to demo that it can be used inside react functional
    component
  </h4>
);

const HeadingComponent = () => (
  <div>
    {/* Component composition (component inside component) example */}
    <Title />
    <h3>Heading 3 via Functional React Element</h3>

    {heading4}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

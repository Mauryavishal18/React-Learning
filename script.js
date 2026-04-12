import React from "react";
import ReactDOM from "react-dom/client";   

// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World from React!"
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



// react  component
const Title = () =>(
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
    );

    const HeadingComponent =()=>(
        <div id="container">
            <Title />
            <h1 className="heading">Namaste React Functional Component</h1>
        </div>
    );

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent/>);
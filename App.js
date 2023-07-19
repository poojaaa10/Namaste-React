import React from "react";
import  ReactDOM  from "react-dom";


//component composition
const Title = (
     <div>
         <h1>
        using component component!
    </h1>
    </div>

);
const HeadingComponent = () => {
    return (
    <div id="container">
      { Title }
    <h1 className="heading"> This is rendered after the previous component </h1>
    </div>);
};

const HeadingComponent2 = () =>(
    <h1>hellloooo!</h1>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
//root.render(Title);
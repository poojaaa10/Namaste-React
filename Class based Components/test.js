import User from "./User";
import UserClass from "./UserClass";
import ReactDOM from "react-dom/client";
import React from "react";
import { Component } from "react";

class Test extends Component{
    constructor(props){
        super(props);
     
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent component did mount");
    }
    render(){
        console.log("Parent render")
        const Name = "POOJA";
        const location = "Delhi";
        return (
        <div>
        <User location={"london"} name={"Bhavesh"}/>;
        <UserClass name={Name} location={location} />;
        </div>
        );

    };
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);


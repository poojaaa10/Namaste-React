import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
           userInfo:{
            name:"Dummy",
            location:"Default",
           }
        };
        this.country = "Maharashtra";
        this.state2 = {
            abc:"hello",
            def:"world",
        };
        console.log("child constructor");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo:json,
        });
        console.log("child component did mount");
    }
   
    componentDidUpdate(){
        console.log("component did update");
    }

    render(){
        console.log("child render");
        const { abc, def } = this.state2;
        const { name, location, avatar_url } = this.state.userInfo;
        return(
            <div>
              
                <h3>{name}</h3>
                <h3>{location}</h3>
                <img src={avatar_url}></img>
                <h3>{this.country}</h3>
                <h3> { abc }</h3>
            </div>
        );
    }
}

export default UserClass;
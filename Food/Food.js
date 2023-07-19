import React from "react";
import  ReactDOM  from "react-dom";
import FoodFireLogo from "./Images/burger.jpg";
import Foodlogo from "./Images/mysign.jpg";
// Title component for display logo
const Title = () => (
    
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />

  );
  
  
const Header = () => {
    return (<div className="header">
        <div className="logo-container">
        <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" height="150" width="150" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>); 
};
const rest_items = [
    {
        rest_name:"Mcd",
        cuisines:"burgers",
        rating:"4.8",
        id:1
    },
    {
        rest_name:"Pizza hut",
        cuisines:"pizza",
        rating:"4.7"
    },
    {
        rest_name:"Theobroma",
        cuisines:"cakes",
        rating:"4.5"
    },
    {
        rest_name:"dominos",
        cuisines:"pizzas",
        rating:"4.2"
    },
    {
        rest_name:"Achija",
        cuisines:"North Indian, south indian",
        rating:"4"
    },
    {
        rest_name:"Starbucks",
        cuisines:"Coffee",
        rating:"5"
    }
];


const RestaurantCard = (props) =>{
    const { resData } = props;
    return (
        <div className="res-card" >
            <img src={Foodlogo} height="150" width="150" />
            <h1>{props.item.rest_name}</h1>
            <h2>{props.item.cuisines}</h2>
           <h2>{props.item.rating}</h2>
        </div>
    );
}
//
const Body = () =>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
               { rest_items.map( (restaurant)=> <RestaurantCard item={restaurant} />)}
            </div>
        </div>
    );
};
const Food = () => {
    return (
    <div className="App">
     <Header /> 
    <Body />
    </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Food />);
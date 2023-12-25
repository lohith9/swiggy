import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.vecteezy.com/vector-art/8687818-food-delivery-logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">

        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout);
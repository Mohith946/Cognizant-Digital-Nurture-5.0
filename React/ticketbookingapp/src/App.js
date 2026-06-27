import React, { Component } from "react";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };
    }
    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };
    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    };
    render() {
        let button;
        let page;
        if (this.state.isLoggedIn) {
            button = (
                <LogoutButton
                    onClick={this.handleLogout}
                />
            );
            page = <UserPage />;
        } else {
            button = (
                <LoginButton
                    onClick={this.handleLogin}
                />
            );
            page = <GuestPage />;
        }
        return (
            <div style={{ padding: "20px" }}>
                <h1>Ticket Booking App</h1>
                {button}
                <hr />
                {page}
            </div>
        );
    }
}
export default App;
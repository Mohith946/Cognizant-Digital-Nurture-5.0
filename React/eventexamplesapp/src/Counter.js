import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };
    sayHello = () => {
        alert("Hello! Have a nice day.");
    };
    incrementAndHello = () => {
        this.increment();
        this.sayHello();
    };
    sayWelcome = (message) => {
        alert(message);
    };
    onPress = (event) => {
        alert("I was clicked");
        console.log(event);
    };
    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.incrementAndHello}>
                    Increment
                </button>
                <button onClick={this.decrement}>
                    Decrement
                </button>
                <br /><br />
                <button
                    onClick={() =>
                        this.sayWelcome("Welcome")
                    }
                >
                    Say Welcome
                </button>
                <br /><br />
                <button onClick={this.onPress}>
                    OnPress
                </button>
            </div>
        );
    }
}
export default Counter;
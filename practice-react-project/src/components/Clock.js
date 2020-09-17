import React from "react";
import { Link } from "react-router-dom";

//Experiment component
class Clock extends React.Component {
    // base constructor (function logic?)
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //Methods
    // DidMount and WillUnmount represent a "life cycle" of the display
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //adding another tick method to allow clock to increment every second.
    //after unmount, this state generates a new date after 1 second.
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


// setInterval(Clock, 1000);


export default Clock;
import React, { Component } from "react";

export default class TrackMouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        };
    }

    logMousePos = e => {
        this.setState({ x: e.clientX, y: e.clientY });
    };

    componentDidMount() {
        window.addEventListener("mousemove", this.logMousePos);
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove", this.logMousePos);
    }

    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        );
    }
}

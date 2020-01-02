import React from "react";

export default class ClassTimer extends React.Component {
    interval;
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div>
            <div>
                Timer -{this.state.timer}
            </div>
            <button onClick={() => clearInterval(this.interval)}>Stop timer</button>
        </div>;
    }
}

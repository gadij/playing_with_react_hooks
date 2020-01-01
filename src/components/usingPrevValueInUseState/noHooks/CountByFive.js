import React from "react";

export default class CountByFive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.goByFive = this.goByFive.bind(this);
    }

    goByFive = () => {
        for (let i = 0; i < 5; i++) {
            this.setState((state) => {
                return { count: state.count + 1 };
            });
        }
    };
    render() {
        const { count } = this.state
        return (
            <div>
                <h2>
                    Count: {count}
                </h2>
                <button onClick={() => this.setState((state) => (
                    { count: state.count + 1 }
                ))}>Incerement</button>
                <button onClick={() => this.setState((state) => (
                    { count: state.count - 1 }
                ))}>Decerement</button>
                <button onClick={() => this.setState({ count: 0 }
                )}>Reset</button>
                <button onClick={this.goByFive}>Increment by 5</button>
            </div >
        );
    }
}

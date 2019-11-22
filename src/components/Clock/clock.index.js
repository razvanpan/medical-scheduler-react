import React from 'react';
import Clock from 'react-clock';

class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        date: new Date(),
    }

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    render() {
        return (
            <div >
                <Clock
                    value={this.state.date}
                    size={this.props.zise}
                />
            </div>
        );
    }
}

export default ClockComponent;

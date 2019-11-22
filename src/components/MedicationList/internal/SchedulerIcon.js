import React from 'react';


class SchedulerIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    checkAvailability(slot) {
        let color;
        if (slot) {
            color = 'black'
        } else {
            color = 'white'
        }
        return color
    }

    render() {
        return (
            <div className="row" style={{ height: "100%" }}>
                <div className="col" style={{ padding: "0rem" }}>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: this.checkAvailability(this.props.scheduler.morning), height: "33.3%" }}>
                    </div>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: this.checkAvailability(this.props.scheduler.lunch), height: "33.3%" }}>
                    </div>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: this.checkAvailability(this.props.scheduler.evening), height: "33.3%" }}>
                    </div>
                </div>
            </div>
        )
    }

}

export default SchedulerIcon;

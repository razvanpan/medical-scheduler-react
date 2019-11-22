import React from 'react';
import SchedulerSlotComponent from './internal/scheduler-slot.index'

class SchedulerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row" style={{ width: "100%" }}>
                <div className="col-4 d-flex justify-content-center">
                    <SchedulerSlotComponent slot={this.props.scheduler.morning} />
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <SchedulerSlotComponent slot={this.props.scheduler.lunch} />
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <SchedulerSlotComponent slot={this.props.scheduler.evening} />
                </div>
            </div>
        )
    }
}

export default SchedulerComponent

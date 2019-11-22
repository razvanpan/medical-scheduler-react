import React from 'react';
import { SchedulerSlotEnum } from '../../../model/SchedulerSlotEnum.ts'

class SchedulerSlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (this.props.slot === true) {
            return SchedulerSlotEnum.I;
        } else if (this.props.slot === false) {
            return SchedulerSlotEnum.O;
        }
    }
}

export default SchedulerSlot

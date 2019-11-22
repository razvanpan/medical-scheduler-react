import React from 'react';
import { PortionEnum } from '../../model/PortionEnum.ts';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

class PortionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (this.props.portion === PortionEnum.HALF) {
            return (
                <div className="row">
                    <div className="col-4" style={{ color: "#d6d5d5" }}>
                        <RadioButtonUncheckedIcon fontSize="medium" />
                    </div>
                    <div className="col-4">
                        <NotInterestedIcon cfontSize="medium" />
                    </div>
                    <div className="col-4" style={{ color: "#d6d5d5" }}>
                        <DonutLargeIcon cfontSize="medium" />
                    </div>
                </div >
            );
        } else if (this.props.portion === PortionEnum.QUARTER) {
            return (
                <div className="row">
                    <div className="col-4" style={{ color: "#d6d5d5" }}>
                        <RadioButtonUncheckedIcon fontSize="medium" />
                    </div>
                    <div className="col-4" style={{ color: "#d6d5d5" }}>
                        <NotInterestedIcon cfontSize="medium" />
                    </div>
                    <div className="col-4" >
                        <DonutLargeIcon cfontSize="medium" />
                    </div>
                </div >
            );
        } else if (this.props.portion === PortionEnum.FULL) {
            return (
                <div className="row">
                    <div className="col-4" >
                        <RadioButtonUncheckedIcon fontSize="medium" />
                    </div>
                    <div className="col-4" style={{ color: "#d6d5d5" }}>
                        <NotInterestedIcon cfontSize="medium" />
                    </div>
                    <div className="col-4" style={{ color: "#d6d5d5" }}>
                        <DonutLargeIcon cfontSize="medium" />
                    </div>
                </div >
            )
        }
    }
}

export default PortionComponent

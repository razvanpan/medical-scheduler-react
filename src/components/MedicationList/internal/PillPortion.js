import React from 'react';
import "../style.css";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { PortionEnum } from '../../../model/PortionEnum.ts';

class PillPortion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (this.props.portion === PortionEnum.FULL) {
            return (
                <RadioButtonUncheckedIcon fontSize="medium" />
            )
        }
        if (this.props.portion === PortionEnum.HALF) {
            return (
                <NotInterestedIcon cfontSize="large" />
            )
        }
        if (this.props.portion === PortionEnum.QUARTER) {
            return (
                <DonutLargeIcon cfontSize="large" />
            )
        }

    }

}

export default PillPortion;

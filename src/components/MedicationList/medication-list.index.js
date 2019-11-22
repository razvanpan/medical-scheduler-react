import React from 'react';
import List from '@material-ui/core/List';
import MedicationRow from './internal/MedicationRow';
import { PagesEnum } from '../../model/PagesEnum.ts';

class MedicationList extends React.Component {

    uuidv3 = require('uuid/v3');

    constructor(props) {
        super(props);
        this.state = {}

        this.navigateToPillInfo = this.navigateToPillInfo.bind(this);
    }

    navigateToPillInfo() {
        this.props.onPageChange(PagesEnum.PILL_INFO);
    }

    render() {
        return (
            <div style={{
                height: "30rem", overflow: "scroll", paddingBottom: "7rem"
            }}>
                <List style={{ width: "-webkit - fill - available" }}>
                    {this.props.pills.map((element) =>
                        (
                            <div onClick={this.navigateToPillInfo}>
                                <MedicationRow key={element.key} element={element} selectedPill={this.props.selectedPill} />
                            </div>
                        )
                    )}
                </List>
            </div >
        );
    }
}

export default MedicationList;

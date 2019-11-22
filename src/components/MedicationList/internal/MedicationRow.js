import React from 'react';

import ArrowIcon from "@material-ui/icons/ArrowForwardIos";
import PillPortion from "./PillPortion";
import SchedulerIcon from "./SchedulerIcon";

class MedicationRow extends React.Component {
    constructor(props) {
        super(props);
        this.onClickRow = this.onClickRow.bind(this);
    }

    onClickRow() {
        this.props.selectedPill(this.props.element);
    }

    render() {
        return (
            <div className="row" style={{ width: "-webkit-fill-available", height: "40px", marginBottom: "0.5rem" }} onClick={this.onClickRow}>
                <div className="col-2" style={{ textAlign: "center" }}>
                    <div className="row" style={{ height: "100%" }}>
                        <div className="col-4">
                        </div>
                        <div className="col-1" style={{ padding: "0%", overflow: "hidden", border: "1px solid" }}>
                            <SchedulerIcon scheduler={this.props.element.scheduler} />
                        </div>
                        <div className="col-6" style={{ padding: "0%", marginTop: "0.2rem" }}>
                            <PillPortion portion={this.props.element.portion} />
                        </div>
                    </div>
                </div>
                <div className="col-8" style={{ padding: "0%", marginTop: "0.6rem" }}>
                    {this.props.element.name}
                </div>
                <div className="col-2">
                    <ArrowIcon />
                </div>
            </div>
        )
    }

}

export default MedicationRow;

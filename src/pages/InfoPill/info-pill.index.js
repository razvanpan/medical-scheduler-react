import React from 'react';
import Header from "../../components/Header/header.index";
import SchedulerComponent from "../../components/Scheduler/scheduler.index";
import Clock from '../../components/Clock/clock.index';
import Avatar from 'react-avatar';
import "./style.css";
import PortionComponent from '../../components/Portion/portion.index';
import { Button } from 'reactstrap';

class InfoPill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 150
        }
    }

    render() {
        return (
            <div>
                <Header page={this.props.page} onPageChange={this.props.onPageChange} />
                <div style={{ marginTop: "25%" }}>
                    <div className="row" style={{ width: "100%", paddingLeft: "8%" }}>
                        <div className="col-6 d-flex justify-content-end">
                            <Avatar googleId="118096717852922241760" size="150" round={true} />
                        </div>
                        <div className="col-6 d-flex justify-content-start">
                            <Clock zise={this.state.size}></Clock>
                        </div>
                    </div>
                </div>
                <div className="globalMargin">
                    <div className="title">PILL:</div>
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-6 text d-flex justify-content-end">PILL NAME: </div>
                            <div className="col-6 d-flex justify-content-start">{this.props.pillInfo.name}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text d-flex justify-content-end">PORTION: </div>
                            <div className="col-6 d-flex justify-content-start">
                                <PortionComponent portion={this.props.pillInfo.portion} />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text d-flex justify-content-end">SCHEDULER: </div>
                            <div className="col-6 d-flex justify-content-start">
                                <SchedulerComponent scheduler={this.props.pillInfo.scheduler} />
                            </div>
                        </div>
                    </div>

                    <div className="title">ALARM:</div>
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-6 text d-flex justify-content-start">SOUND: </div>
                            <div className="col-6 d-flex justify-content-end">
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text d-flex justify-content-start">VIBRATE: </div>
                            <div className="col-6 d-flex justify-content-end">
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text d-flex justify-content-start">RING DURATION: </div>
                            <div className="col-6 d-flex justify-content-end">
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text d-flex justify-content-start">SNOOZ TIME: </div>
                            <div className="col-6 d-flex justify-content-end">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="infoPillDeleteButton  row">
                    <div className="col-12 d-flex justify-content-center">
                        <Button color="danger">DELETE</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoPill;

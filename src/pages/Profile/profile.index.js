import React from 'react';
import Header from "../../components/Header/header.index";
import BottomNav from '../../components/BottomNav/bottom-nav.index';
import Avatar from 'react-avatar';
import { Button } from 'reactstrap';
import "./style.css";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header page={this.props.page} onPageChange={this.props.onPageChange}></Header>
                <div style={{ marginTop: "30%", textAlign: "center" }}>
                    <Avatar googleId="118096717852922241760" size="150" round={true} />
                </div>
                <div style={{ textAlign: "center", paddingTop: "20%", width: "96%" }}>
                    <div className="row" >
                        <div className="col-6 d-flex justify-content-end" style={{ fontWeight: "bold" }}>NAME:</div>
                        <div className="col-6 d-flex justify-content-start">{this.props.personInfo.name}</div>
                    </div>
                    <div className="row">
                        <div className="col-6 d-flex justify-content-end" style={{ fontWeight: "bold" }}>AGE:</div>
                        <div className="col-6 d-flex justify-content-start" >{this.props.personInfo.age}</div>
                    </div>
                    <div className="row">
                        <div className="col-6 d-flex justify-content-end" style={{ fontWeight: "bold" }}>E-MAIL:</div>
                        <div className="col-6 d-flex justify-content-start">{this.props.personInfo.mail}</div>
                    </div>
                </div>
                <div className="profileButtons row">
                    <div className="col-6 d-flex justify-content-end">
                        <Button outline color="danger">LOGOUT</Button>
                    </div>
                    <div className="col-6 d-flex justify-content-start">
                        <Button color="danger">DELETE</Button>
                    </div>
                </div>
                <BottomNav onPageChange={this.props.onPageChange} page={this.props.page}></BottomNav>
            </div>
        );
    }
}

export default Profile;

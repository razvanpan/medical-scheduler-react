import React from 'react';
import Header from "../../../components/Header/header.index";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import * as manualImg from '../../../assets/manual-effort.png';
import * as qrCodeImg from '../../../assets/qr_code_PNG6.png';
import "./style.css";
import { PagesEnum } from '../../../model/PagesEnum.ts';

class AddMedicationChoicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.goToManualAdd = this.goToManualAdd.bind(this);
    }

    goToManualAdd() {
        this.props.onPageChange(PagesEnum.ADD_MANUAL_MEDICATION_PAGE);
        console.log(this.props);
    }

    goToQRcodeAdd() {
        this.props.onPageChange(PagesEnum.ADD_QR_MEDICATION_PAGE);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Header page={this.props.page} onPageChange={this.props.onPageChange}></Header>
                <div className="row" style={{ marginTop: "20%", paddingTop: "10%" }}>
                    <div className="col-12 d-flex justify-content-center">
                        <Card className="cardSpecs" onClick={this.goToManualAdd}>
                            <CardImg top width="100%" src={manualImg} alt="Card image cap" />
                            <CardBody className="cardTitle">
                                <CardTitle>MANUAL</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "4rem", paddingTop: "1rem" }}>
                    <div className="col-12 d-flex justify-content-center">
                        <Card className="cardSpecs" onClick={this.goToQRcodeAdd}>
                            <CardImg top width="100%" src={qrCodeImg} alt="Card image cap" />
                            <CardBody className="cardTitle">
                                <CardTitle>QR CODE</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div >
        );
    }
}

export default AddMedicationChoicePage;

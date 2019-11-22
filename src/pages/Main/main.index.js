import React from 'react';

// Components import
import BottomNav from '../../components/BottomNav/bottom-nav.index';
import MedicationList from '../../components/MedicationList/medication-list.index';
import Clock from '../../components/Clock/clock.index';
import Header from "../../components/Header/header.index";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { PagesEnum } from '../../model/PagesEnum.ts';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 250
        }

        this.goToAddMedicationView = this.goToAddMedicationView.bind(this);
    }

    goToAddMedicationView() {
        this.props.onPageChange(PagesEnum.ADD_MEDICATION_PAGE);
    }

    render() {
        return (
            <div>
                <Header page={this.props.page}></Header>
                <div style={{ marginTop: "4rem", paddingTop: "1rem" }}>
                    <div style={{ paddingLeft: "20%" }}>
                        <Clock zise={this.state.size}></Clock>
                    </div>
                    <div>
                        {/* <Dialog></Dialog> */}
                    </div>
                    <MedicationList pills={this.props.pillList} onPageChange={this.props.onPageChange} selectedPill={this.props.selectedPill}></MedicationList>
                </div>
                <div className="row" style={{ position: "fixed", width: "-webkit-fill-available", bottom: "5.5rem" }}>
                    <div className="col-12" style={{ textAlign: "center", marginBottom: "-10px" }}>
                        <Fab color="default" aria-label="add" onClick={this.goToAddMedicationView}>
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
                <BottomNav onPageChange={this.props.onPageChange} page={this.props.page}></BottomNav>
            </div>
        );
    }
}

export default Main;

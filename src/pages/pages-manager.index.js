import React from 'react';
import { PagesEnum } from '../model/PagesEnum.ts';
import MainPage from './Main/main.index';
import InfoPill from './InfoPill/info-pill.index';
import ProfilePage from './Profile/profile.index';
import { Pill } from '../model/Pill.model';
import { PortionEnum } from "../model/PortionEnum.ts";
import { Scheduler } from "../model/Scheduler.model";
import { Person } from "../model/Person.model";
import AddMedicationChoicePage from "./AddMedication/ChoicePage/choice-page.index";

const PILLS = [
    new Pill(1, 'Aspirin', PortionEnum.HALF, new Scheduler(true, false, false)),
    new Pill(2, 'Pill 3', PortionEnum.FULL, new Scheduler(false, false, true)),
    new Pill(3, 'Pill 8', PortionEnum.HALF, new Scheduler(true, false, true)),
    new Pill(4, 'Pill 7', PortionEnum.QUARTER, new Scheduler(true, true, true)),
    new Pill(5, 'Something', PortionEnum.HALF, new Scheduler(false, false, true)),
    new Pill(6, 'Pill to take', PortionEnum.FULL, new Scheduler(false, false, true)),
    new Pill(7, 'Para', PortionEnum.HALF, new Scheduler(false, true, false)),
    new Pill(8, 'Pill for pain', PortionEnum.QUARTER, new Scheduler(true, false, false)),
    new Pill(9, 'Pill 2', PortionEnum.FULL, new Scheduler(true, false, true)),
    new Pill(10, 'Headache', PortionEnum.QUARTER, new Scheduler(false, true, true))
]

const PERSON_INFO = new Person(1, 'Andrei', 21, 'andrei@gmail.com');

class PagesManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: PagesEnum.MAIN_PAGE,
            selectedPill: ''
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSelectPill = this.handleSelectPill.bind(this);
    }

    handlePageChange(page) {
        this.setState({
            page: page
        })
    }

    handleSelectPill(selectedPill) {
        this.setState({
            selectedPill: selectedPill
        })
    }

    render() {
        if (this.state.page === PagesEnum.MAIN_PAGE) {
            return (<MainPage onPageChange={this.handlePageChange} page={this.state.page} pillList={PILLS} selectedPill={this.handleSelectPill} />);
        } else if (this.state.page === PagesEnum.PROFILE_PAGE) {
            return (<ProfilePage onPageChange={this.handlePageChange} page={this.state.page} personInfo={PERSON_INFO} />);
        } else if (this.state.page === PagesEnum.PILL_INFO) {
            return (<InfoPill onPageChange={this.handlePageChange} page={this.state.page} pillInfo={this.state.selectedPill} />);
        } else if (this.state.page === PagesEnum.ADD_MEDICATION_PAGE) {
            return (<AddMedicationChoicePage onPageChange={this.handlePageChange} page={this.state.page} />);
        } else if (this.state.page === PagesEnum.ADD_MANUAL_MEDICATION_PAGE) {
            return (<InfoPill onPageChange={this.handlePageChange} page={this.state.page} />);
        }
    }

}

export default PagesManager;

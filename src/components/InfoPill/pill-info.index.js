// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from "../../pages/Main/index";
import NavigationBar from "../NavigationBar/index";
import PillInfo from "./PillInfo";

import "./style.css";

class InfoPill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    navBack = () => {
        ReactDOM.render(<MainPage />, document.getElementById('root'));

    }
    render() {
        return (
            <div>
                <NavigationBar navBack={true}></NavigationBar>
                <div id="pillInfo">
                    {/* <div class="left"></div> */}
                </div>
                <button onClick={this.navBack}>Nav back </button>
                <PillInfo></PillInfo>
            </div>);
    }
}

export default InfoPill;

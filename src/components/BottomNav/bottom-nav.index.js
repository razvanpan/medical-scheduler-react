import React from 'react';
import "./style.css"
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Icon";
import IconButton from '@material-ui/core/IconButton';
import { PagesEnum } from '../../model/PagesEnum.ts';

// Icons
import ListIcon from "@material-ui/icons/List";
import ProfileIcon from "@material-ui/icons/AccountCircle";

class BottomNav extends React.Component {
    constructor(props) {
        super(props);
        this.goToMainPage = this.goToMainPage.bind(this);
        this.goToProfilePage = this.goToProfilePage.bind(this);
    }

    goToMainPage() {
        this.props.onPageChange(PagesEnum.MAIN_PAGE);
    }

    goToProfilePage() {
        this.props.onPageChange(PagesEnum.PROFILE_PAGE);
    }

    render() {
        if (this.props.page === PagesEnum.MAIN_PAGE) {
            return (
                <div className="bar row" style={{ width: "-webkit-fill-available" }}>
                    <div className="col-6" style={{ textAlign: "center" }}>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={this.goToMainPage}>
                            <ListIcon style={{ fontSize: 40 }} />
                        </IconButton>
                    </div>
                    <div className="col-6" style={{ textAlign: "center" }}>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={this.goToProfilePage}>
                            <ProfileIcon style={{ fontSize: 40, color: 'grey', opacity: 20 }} />
                        </IconButton>
                    </div>
                </div >
            );
        }
        if (this.props.page === PagesEnum.PROFILE_PAGE) {
            return (
                <div className="bar row" style={{ width: "-webkit-fill-available" }}>
                    <div className="col-6" style={{ textAlign: "center" }}>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={this.goToMainPage}>
                            <ListIcon style={{ fontSize: 40, color: 'grey', opacity: 20 }} />
                        </IconButton>
                    </div>
                    <div className="col-6" style={{ textAlign: "center" }}>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={this.goToProfilePage}>
                            <ProfileIcon style={{ fontSize: 40 }} />
                        </IconButton>
                    </div>
                </div >
            );
        }
    }
}
export default BottomNav;

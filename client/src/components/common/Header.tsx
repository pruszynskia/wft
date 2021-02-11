import React from 'react';
import { headerStyles } from "../../styles/common";
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link, useRouteMatch, useParams } from "react-router-dom";

const Header = () => {
    const useStyles = headerStyles()
    

    /* Options Button */
    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);

    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl1(event.currentTarget);
    };

    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return (
        <div className={useStyles.root}>
            
            <div className={useStyles.navLogo}>
                WFT
            </div>
            <div className={useStyles.buttonGroup}>
                {/* Options button */}
                <Button className={`${useStyles.navButton}`}
                        aria-controls="simple-menu" 
                        aria-haspopup="true" 
                        onClick={handleClick1}>
                    OPTIONS
                </Button>
                <Menu className={useStyles.navMenu}
                    id="simple-menu"
                    anchorEl={anchorEl1}
                    keepMounted
                    open={Boolean(anchorEl1)}
                    onClose={handleClose1}
                >
                    <MenuItem className={useStyles.menuItem} onClick={handleClose1}><Link to="/">Home</Link></MenuItem>
                    <MenuItem className={useStyles.menuItem} onClick={handleClose1}><Link to="/job-offers-list">Job Offers</Link></MenuItem>
                    <MenuItem className={useStyles.menuItem} onClick={handleClose1}><Link to="/tech-profile">Tech Profile</Link></MenuItem>
                    <MenuItem className={useStyles.menuItem} onClick={handleClose1}><Link to="/for-employers">For Employers</Link></MenuItem>
                    <MenuItem className={useStyles.menuItem} onClick={handleClose1}><Link to="/add-job-offer">Post a Job</Link></MenuItem>
                    <MenuItem className={useStyles.menuItem} onClick={handleClose1}><Link to="/companies">Companies</Link></MenuItem>
                    <MenuItem className={useStyles.menuItem} onClick={handleClose1}><Link to="/language">Language</Link></MenuItem>
                    <MenuItem className={useStyles.menuItem} onClick={handleClose1}><Link to="/country">Country</Link></MenuItem>
                </Menu>     

                {/* Acount button */}
                <Button className={useStyles.navButton}
                        aria-controls="simple-menu" 
                        aria-haspopup="true" 
                        onClick={handleClick2}>
                    Sign in
                </Button>
                <Menu className={useStyles.navMenu}
                    id="simple-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                >
                    <MenuItem className={useStyles.menuItem} onClick={handleClose2}><Link to="/login">Log In</Link></MenuItem>
                    <MenuItem className={useStyles.menuItem} onClick={handleClose2}><Link to="/register">Register</Link></MenuItem>
                </Menu>
            </div>
        </div>
    )
};

export default Header;
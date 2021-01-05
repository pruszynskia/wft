import React from 'react';
import { footerStyles } from "../../styles/common";

const Footer = () => {
    const useStyles = footerStyles()
    return (
        <div className={useStyles.root}>
            <div className={useStyles.footerContainer}>
                <div className={`${useStyles.navLogo} ${useStyles.footerItem}`}>
                    WFT
                </div>
                <div className={useStyles.footerItem}>
                    <h3>Contact us:</h3>
                    <p>(+66) 666 666 666</p>
                    <a href="mailto:andrzej.pruszynski90@gmail.com">andrzej.pruszynski90@gmail.com</a>
                </div>
                <div className={useStyles.footerItem}>
                    <h3>About us:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates at, aspernatur explicabo ea dolore obcaecati voluptate expedita corrupti, praesentium modi dolores reiciendis nisi, nulla eaque tempore repellendus saepe accusantium quidem?</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
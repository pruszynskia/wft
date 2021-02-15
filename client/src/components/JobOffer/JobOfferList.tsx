import React, { useState } from 'react';
import { JobOfferStyles } from "../../styles/common";
import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import {addJob} from "../../redux/actions"
import store from '../../redux/store';

import { Link } from 'react-router-dom';
import AddJobOffer from './AddJobOffer';

interface RootState {
    jobOffers: any
}

const JobOffer = () => {
    const useStyles = JobOfferStyles();

    // Position type button
    function handleSomething(){
        store.dispatch(addJob(1))
    }

    // Searchbar
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(e: any) {
        setSearchTerm(e.target.value);
    }
    let data = useSelector((state: RootState) => state.jobOffers).filter((pos: any) =>
        pos.position.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pos.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Modal
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }; 

    return (
        <div className={useStyles.root}>
            <div className={useStyles.jobOfferInnerContainer}>
                <div className={useStyles.upperCaseBold}>
                    <Button onClick={handleSomething}>
                        <h2>Position type</h2>
                    </Button>
                </div>
                <div className={useStyles.upperCaseBold}>
                    <Button onClick={handleOpen}>
                        <h2>Add job offer</h2>
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div>
                                <AddJobOffer  />
                            </div>
                        </Fade>
                    </Modal>
                </div>
            </div>
            <input 
                type="text" 
                placeholder="Search"
                onChange={handleChange}
                value={searchTerm}
            />
            
            {
            data.map((pos: any, id: any) => 
                <Link to={`/${pos.id}`} key={id}>
                    <Card className={useStyles.jobOfferContainer}>
                        <CardActionArea>
                            <CardContent className={useStyles.jobOfferInnerContainer}>
                                <div className={useStyles.jobOfferInnerContainer}>
                                    <Avatar>A</Avatar>
                                    <div className={`${useStyles.jobOfferItem} ${useStyles.bold}`} >
                                        {pos.position.name}
                                    </div>
                                    <div className={useStyles.jobOfferItem}>
                                        {pos.company.name}
                                    </div>
                                </div>
                                <div className={useStyles.jobOfferItem}>
                                    {pos.position.salary.min} - {pos.position.salary.max}
                                </div>
                                <div className={useStyles.jobOfferItem}>
                                    {pos.company.address.city}, {pos.company.address.country}
                                </div>
                                <div>
                                    <Button
                                    startIcon={<DeleteIcon />}
                                    />
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            )
            }
                <div className={useStyles.upperCaseBold}>
                    <Button>
                        <h4>More Jobs</h4>
                    </Button>
                </div>
        </div>
    )
};

export default JobOffer;
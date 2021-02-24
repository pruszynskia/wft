import React, { useState } from 'react';
import { JobOfferStyles } from "../../styles/common";
import { useSelector, useDispatch, useStore } from 'react-redux';

import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    Dialog,
    DialogContent,
} from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';

import { Link } from 'react-router-dom';
import AddJobOffer from './AddJobOffer';

interface RootState {
    jobOffers: any,
    visibilityFilters: {
        addJobOfferFilter: boolean
    }
}

const JobOffer = () => {
    const useStyles = JobOfferStyles();
    const dispatch = useDispatch();

    /*
    const addJobOfferFilter = useSelector(
        (state: RootState) => state.visibilityFilters.addJobOfferFilter
    );
    */

    // Searchbar
    const [searchTerm, setSearchTerm] = useState('');
    // Dialog
    const [open, setOpen] = useState(false);
    const [, updateState] = useState({});

    const forceUpdate = React.useCallback(() => updateState({}), []);
   
    // Searchbar
    function handleChange(e: any) {
        setSearchTerm(e.target.value);
    }
    let data = useSelector((state: RootState) => state.jobOffers).filter((pos: any) =>
        pos.position.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pos.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Dialog
    const handleOpen = () => {
        setOpen(true);
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: {
                addJobOfferFilter: true
            }
        })
    };

    const handleClose = () => {
   
        setOpen(false);
        forceUpdate();
    }; 

    // Delete button
    const handleDelete = (id:any) => {

        console.log(id)
        dispatch({
            type: 'DELETE_JOB_OFFER',
            payload: id
        })
    };

    return (
        <div className={useStyles.root}>
            <div className={useStyles.jobOfferInnerContainer}>
                <div className={useStyles.upperCaseBold}>
                    <Button onClick={handleOpen}>
                        <h2>Add job offer</h2>
                    </Button>
                    <Dialog className={useStyles.dialog}
                        aria-labelledby="transition-dialog-title"
                        open={open}
                        onClose={handleClose}
                    >
                        <DialogContent>
                            <div>
                                <AddJobOffer  setOpen={setOpen}/>
                            </div>
                        </DialogContent>
                    </Dialog>
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
            <div className={useStyles.jobOfferContainer} key={id}>
                <Link to={`/${pos.id}`}  >
                    <Card>
                        <CardActionArea >
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
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Button onClick={() => handleDelete(pos.id)} >
                    <DeleteIcon />
                </Button>   
            </div>
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

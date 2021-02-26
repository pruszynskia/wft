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
import EditIcon from '@material-ui/icons/Edit';

import { Link } from 'react-router-dom';
import JobOfferForm from './AddJobOffer';

interface RootState {
    jobOffers: any,
    visibilityFilters: {
        addJobOfferFilter: boolean,
        editJobOfferFilter: boolean
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
    const [openAddJobOffer, setOpenAddJobOffer] = useState(false);
    const [openEditJobOffer, setOpenEditJobOffer] = useState(false);
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
        setOpenAddJobOffer(true);
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: {
                addJobOfferFilter: true
            }
        })
    };
    
    const handleOpen2 = () => {
        setOpenEditJobOffer(true);
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: {
                editJobOfferFilter: true
            }
        })
    };

    const handleClose = () => {
        setOpenAddJobOffer(false);
        forceUpdate();
    }; 
    
    const handleClose2 = () => {
        setOpenEditJobOffer(false);
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

    // Edit button
    const handleEdit = (data: any) => {
        dispatch({
            type: 'EDIT_JOB_OFFER',
            payload: data 
        })
    }

    return (
        <div className={useStyles.root}>
            <div className={useStyles.jobOfferInnerContainer}>
                <div className={useStyles.upperCaseBold}>
                    <Button onClick={handleOpen}>
                        <h2>Add job offer</h2>
                    </Button>
                    <Dialog className={useStyles.dialog}
                        aria-labelledby="transition-dialog-title22"
                        open={openAddJobOffer}
                        onClose={handleClose}
                    >
                        <DialogContent>
                            <div>
                                <JobOfferForm setOpen={setOpenAddJobOffer}/>
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
                <Button onClick={handleOpen2}>
                    <EditIcon />
                </Button>
                <Dialog className={useStyles.dialog}
                    aria-labelledby={"transition-dialog-title"+pos.id}
                    open={openEditJobOffer}
                    onClose={handleClose2}
                >
                    <DialogContent>
                        <div>
                            <JobOfferForm setOpen={setOpenEditJobOffer}
                                data1={pos}
                            />
                        </div>
                    </DialogContent>
                </Dialog>
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

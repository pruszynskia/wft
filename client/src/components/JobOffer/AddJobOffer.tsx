import React, { useState } from 'react';
import { AddJobOfferStyles } from '../../styles/common';

import { useSelector, useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const initialFformData = {
    company: {
        name: "",
        size: "",
        address: {
          country: "",
          city: "",
          streat: ""
        },
        email: "",
        logo: "",
        creationDate: ""
      },
      position: {
        name: "",
        type: "",
        lvl: "",
        languageRequired: "",
        languageOptional: "",
        spokenLanguage: "",
        remote: "",
        contractType: "",
        salary: {
          min: "",
          max: ""
        },
        date: ""
    }
}

const AddJobOffer = () => {

    // Submit button - add job offer
    const dispatch = useDispatch();
    const jobOffers = useSelector((state: any) =>
    state.jobOffers)
    const handleAddJobOffer = () => {
        dispatch({type: "ADD_JOB_OFFER"})
    }

    
    const useStyles = AddJobOfferStyles();

    const [formData, setFormData] = useState(initialFformData);

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // console.log(formData)
        }
        
    return (
        <form className={useStyles.root}
        onSubmit={handleSubmit}
        >
            <h1>Form</h1>
            <Card className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Company Info</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Company Name"
                    name="company.name"
                    value={formData.company.name}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Size"
                    name="company.size"
                    value={formData.company.size}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Country"
                    name="company.address.country"
                    value={formData.company.address.country}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="City"
                    name="company.address.city"
                    value={formData.company.address.city}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Streat"
                    name="company.address.streat"
                    value={formData.company.address.streat}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Email"
                    name="company.email"
                    value={formData.company.email}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Logo"
                    name="company.logo"
                    value={formData.company.logo}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Creation date"
                    name="company.creationDate"
                    value={formData.company.creationDate}
                    onChange={handleInputChange}
                    />
                </CardContent>
            </Card>
            <Card className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Position Info</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Position Name"
                    name="position.name"
                    value={formData.position.name}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Category"
                    name="position.type"
                    value={formData.position.type}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Seniority level"
                    name="position.lvl"
                    value={formData.position.lvl}
                    onChange={handleInputChange}
                    />
                </CardContent>
            </Card>
            <Card className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Requirements</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Must-Have"
                    name="position.languageRequired"
                    value={formData.position.languageRequired}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Nice-To-Have"
                    name="position.languageOptional"
                    value={formData.position.languageOptional}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Language"
                    name="position.spokenLanguage"
                    value={formData.position.spokenLanguage}
                    onChange={handleInputChange}
                    />
                </CardContent>
            </Card>
            <Card className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Job description</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Remote"
                    name="position.remote"
                    value={formData.position.remote}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Contract Type"
                    name="position.contractType"
                    value={formData.position.contractType}
                    onChange={handleInputChange}
                    />
                </CardContent>
            </Card>
            <Card  className={useStyles.containerColumn}>
                <CardContent>
                    <h2>Salary</h2>
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Salary-Min"
                    name="position.salary.min"
                    value={formData.position.salary.min}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Salary-Max"
                    name="position.salary.max"
                    value={formData.position.salary.max}
                    onChange={handleInputChange}
                    />
                    <TextField className={useStyles.itemColumn}
                    variant="outlined"
                    label="Date"
                    name="position.date"
                    value={formData.position.date}
                    onChange={handleInputChange}
                    />
                </CardContent>
            </Card>
            <div className={useStyles.containerRow}>
                <Button className={useStyles.button}
                type="submit"
                onClick={handleAddJobOffer}
                >
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default AddJobOffer;
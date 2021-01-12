import React from 'react';
import { JobOfferStyles } from "../../styles/common";
import companyData from "../../temp/company-data.json";
import { Button } from '@material-ui/core';

const data =companyData;

const JobOffer = () => {
    const useStyles = JobOfferStyles();

    return (
        <div className={useStyles.root}>
            <div className={useStyles.positionType}>
                <Button>
                    <h2>Position Type</h2>
                </Button>
            </div>
            {
            data.map((pos: any) => 
                <div className={useStyles.jobOfferContainer} >
                    
                    <div className={useStyles.jobOfferItem} >
                        {pos.position.position_name}
                    </div>
                    <div className={useStyles.jobOfferItem}>
                        {pos.company.company_name}
                    </div>
                    <div className={useStyles.jobOfferItem}>
                        {pos.position.position_salary.position_salary_min} - {pos.position.position_salary.position_salary_max}
                    </div>
                    <div className={useStyles.jobOfferItem}>
                        {pos.company.address.address_city}, {pos.company.address.address_country}
                    </div>

                </div>
            )
            }
        </div>
    )
};

export default JobOffer;
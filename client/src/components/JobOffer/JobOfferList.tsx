import React from 'react';
import { JobOfferStyles } from "../../styles/common";
import companyData from "../../temp/company-data.json";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';

const data =companyData;

const JobOffer = () => {
    const useStyles = JobOfferStyles();

    return (
        <div className={useStyles.root}>
            <div className={useStyles.upperCaseBold}>
                <Button>
                    <h2>Position Type</h2>
                </Button>
            </div>
            {
            data.map((pos: any, id: any) => 
                <Card key={id} className={useStyles.jobOfferContainer}>
                    <CardActionArea>
                        <CardContent className={useStyles.jobOfferInnerContainer}>
                            <div className={useStyles.jobOfferInnerContainer}>
                                <Avatar>A</Avatar>
                                <div className={`${useStyles.jobOfferItem} ${useStyles.bold}`} >
                                    {pos.position.position_name}
                                </div>
                                <div className={useStyles.jobOfferItem}>
                                    {pos.company.company_name}
                                </div>
                            </div>
                            <div className={useStyles.jobOfferItem}>
                                {pos.position.position_salary.position_salary_min} - {pos.position.position_salary.position_salary_max}
                            </div>
                            <div className={useStyles.jobOfferItem}>
                                {pos.company.address.address_city}, {pos.company.address.address_country}
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
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
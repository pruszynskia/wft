import React from 'react';
import { JobOfferStyles } from "../../styles/common";
import companyData from "../../temp/company-data.json";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';

const data = companyData;

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
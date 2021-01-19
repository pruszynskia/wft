import React from "react";
import { JobOfferDetailsStyles } from "../../styles/common"
import companyData from "../../temp/company-data.json";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import JobOffer from "./JobOfferList";

const data = companyData[0];

const JobOfferDetails = () => {
    const useStyles = JobOfferDetailsStyles();

    return (
        <div className={useStyles.root}>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <Avatar>A</Avatar>
                    <div className={`${useStyles.containerColumn} ${useStyles.bold}`}>
                        <h1>{data.position.name}</h1>
                    </div>
                    <div className={useStyles.containerColumn}>
                        <p>Company: {data.company.name}</p>
                        <p>Company size: {data.company.size}</p>
                    </div>
                    <div className={useStyles.containerRow}>
                        <div className={useStyles.itemBoxRow}>Stażysta</div>
                        <div className={useStyles.itemBoxRow}>Junior</div>
                        <div className={useStyles.itemBoxRow}>Mid</div>
                        <div className={useStyles.itemBoxRow}>Senior</div>
                        <div className={useStyles.itemBoxRow}>Expert</div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.containerColumn}>
                        <div className={useStyles.bold}>
                            <h2>Job description</h2>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cupiditate, magni fugit quidem ut dolorem quod tenetur dignissimos officia voluptates, nostrum laboriosam in possimus? Veniam voluptatem porro cupiditate iste pariatur.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.containerColumn}>
                        <div className={useStyles.bold}>
                            <h2>Must have</h2>
                        </div>
                        <div className={useStyles.containerRow}>
                            {data.position.languageRequired.map((lang: any, id: any) =>
                            <div key={id} className={useStyles.itemBoxRow}>
                                {lang}
                            </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.containerColumn}>
                        <div className={useStyles.bold}>
                            <h2>Nice to have</h2>
                        </div>
                        <div className={useStyles.containerRow}>
                            {data.position.languageOptional.map((lang: any, id: any) =>
                            <div key={id} className={useStyles.itemBoxRow}>
                                {lang}
                            </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.containerColumn}>
                        <div className={useStyles.bold}>
                            <h2>Work methodology</h2>
                        </div>
                        <div className={useStyles.containerColumn}>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Agile management</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Agile</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Issue tracking tool</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Jira</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Knowledge reapository</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>GitLab</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Version control system</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>GIT</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Build server</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>GitLab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.containerColumn}>
                        <div className={useStyles.bold}>
                            <h2>Daily tasks on the job</h2>
                        </div>
                        <div className={useStyles.containerColumn}>
                            <div className={useStyles.containerRow}>
                                <div>
                                    1
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nobis numquam adipisci qui. Repudiandae, rerum illum nesciunt, sit eaque numquam perspiciatis perferendis error id molestias sed ex. Officiis, blanditiis ducimus.</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div>
                                    2
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nobis numquam adipisci qui. Repudiandae, rerum illum nesciunt, sit eaque numquam perspiciatis perferendis error id molestias sed ex. Officiis, blanditiis ducimus.</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div>
                                    3
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nobis numquam adipisci qui. Repudiandae, rerum illum nesciunt, sit eaque numquam perspiciatis perferendis error id molestias sed ex. Officiis, blanditiis ducimus.</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div>
                                    4
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nobis numquam adipisci qui. Repudiandae, rerum illum nesciunt, sit eaque numquam perspiciatis perferendis error id molestias sed ex. Officiis, blanditiis ducimus.</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div>
                                    5
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nobis numquam adipisci qui. Repudiandae, rerum illum nesciunt, sit eaque numquam perspiciatis perferendis error id molestias sed ex. Officiis, blanditiis ducimus.</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div>
                                    6
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nobis numquam adipisci qui. Repudiandae, rerum illum nesciunt, sit eaque numquam perspiciatis perferendis error id molestias sed ex. Officiis, blanditiis ducimus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.itemColumn}>
                        <div className={useStyles.bold}>
                            <h2>Equipment supplied</h2>
                        </div>
                        <div className={useStyles.containerColumn}>
                            <div className={useStyles.itemRow}>
                                <p>Operating System</p>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemBoxRow}>
                                    MacIcon
                                </div>
                                <div className={useStyles.itemBoxRow}>
                                    WindowsIcon
                                </div>
                                <div className={useStyles.itemBoxRow}>
                                    LinuxIcon
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.containerColumn}>
                        <div className={useStyles.bold}>
                            <h2>Offer details</h2>
                        </div>
                        <div className={useStyles.containerColumn}>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Job profile</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Mainly new features</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Start</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>ASAP</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Contract duration</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Permanent contract</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Paid holiday</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>No</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Part time work</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>No</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Remote possible</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>Yes</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Flexible hours</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>No</p>
                                </div>
                            </div>
                            <div className={useStyles.containerRow}>
                                <div className={useStyles.itemDistance}>
                                    <p>Travel involved</p>
                                </div>
                                <div className={useStyles.itemDistance}>
                                    <p>some</p>
                                </div>
                            </div>
                        </div>
                        <div className={useStyles.bold}>
                            <h2>Benefits</h2>
                        </div>
                        <div className={useStyles.containerColumn}>
                            <div className={useStyles.itemColumn}>
                                <p>Training budget</p>
                            </div>
                            <div className={useStyles.itemColumn}>
                                <p>Private healthcare</p>
                            </div>
                            <div className={useStyles.itemColumn}>
                                <p>International projects</p>
                            </div>
                            <div className={useStyles.itemColumn}>
                                <p>Sport subscription</p>
                            </div>
                            <div className={useStyles.itemColumn}>
                                <p>Small teams</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.containerColumn}>
                        <div className={useStyles.bold}>
                            <h2>About company</h2>
                        </div>
                        <div className={useStyles.containerRow}>
                            <div className={useStyles.itemDistance}>
                                FlagIcon
                                <p>Founded in:</p>
                            </div>
                            <div className={useStyles.itemDistance}>
                                {data.company.creationDate}
                            </div>
                        </div>
                        <div className={useStyles.containerRow}>
                            <div className={useStyles.itemDistance}>
                                PersonIcon
                                <p>Company size:</p>
                            </div>
                            <div className={useStyles.itemDistance}>
                                {data.company.size}
                            </div>
                        </div>
                        <div className={useStyles.containerRow}>
                            <div className={useStyles.itemDistance}>
                                HomeIcon
                                <p>Main location:</p>
                            </div>
                            <div className={useStyles.itemDistance}>
                                {data.company.address.city}
                            </div>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam quae perspiciatis a possimus non excepturi voluptates, sapiente quasi quaerat id, impedit hic repellendus rerum libero eos porro ipsam eius.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={useStyles.containerGlobal}>
                <CardContent>
                    <div className={useStyles.containerColumn}>
                        <div className={useStyles.containerOpositeRow}>
                            <div className={useStyles.containerColumn}>
                                <h2>{data.position.salary.min}-{data.position.salary.max}</h2>
                                <p>+ vat (B2B) per hour (optional)</p>
                            </div>
                            <Button className={useStyles.button}>
                                Apply
                            </Button>
                        </div>
                        <div className={useStyles.containerRow}>
                            <div className={useStyles.itemRow}>
                                microphoneIcon
                            </div>
                            <div>
                                <p>Online recruitment</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
};

export default JobOfferDetails;
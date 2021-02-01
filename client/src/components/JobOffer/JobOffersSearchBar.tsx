import React from 'react';
import ReactDOM from 'react-dom';

import { JobOffersSearchBarStyles } from "../../styles/common";
import companyData from "../../temp/company-data.json";

const data = companyData;

const JobOffersSearchBar = () => {
    const useStyles = JobOffersSearchBarStyles();

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([])
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value)
    };

    React.useEffect(() => {
        const results = data.filter((pos: any) => 
            pos.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            );
        //setSearchResults(results);
    }, [searchTerm]);
    return (
        <div className={useStyles.containerRow}>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default JobOffersSearchBar;
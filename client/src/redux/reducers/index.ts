import { ADD_JOB_OFFER, DELETE_JOB_OFFER } from '../actionTypes';

import data from '../../temp/company-data.json'

const initialState = {
    jobOffers: data
};

export default function(state:any = initialState, action: any) {
    switch(action.type) {
        case ADD_JOB_OFFER: {
            console.log("add job offer")
            return {
                ...state,
                jobOffers: [...state.jobOffers, action.payload]
            };
        }
        case DELETE_JOB_OFFER: {

            return {
                
            };
        }
        
        default:
            return state;
    }
}

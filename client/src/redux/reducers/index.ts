import { 
    ADD_JOB_OFFER, 
    DELETE_JOB_OFFER, 
    SET_VISIBILITY_FILTER 
} from '../actionTypes';
import {v4} from 'uuid'
 
import data from '../../temp/company-data.json'

const initialState = {
    jobOffers: data,
    visibilityFilters: {
        addJobOfferFilter: false
    }
};

export default function(state:any = initialState, action: any) {
    switch(action.type) {
        case ADD_JOB_OFFER: {
            console.log("add job offer")
            return {
                ...state,
                jobOffers: [...state.jobOffers, {id: v4(), ...action.payload}]
            };
        }
        case DELETE_JOB_OFFER: {
            console.log(action.payload)
            return {
                ...state,
                jobOffers: 
                    state.jobOffers.filter((data: any) => data.id !== action.payload)
            };
        }

        // VISIBILITY_FILTER
        case SET_VISIBILITY_FILTER: {
            return {
                ...state,
                visibilityFilters: {
                    ...state.visibilityFilters,
                    ...action.payload
                }
            }
        }
        
        default:
            return state;
    }
}



import { combineReducers } from "redux";
import { ADD_JOB_OFFER, DELETE_JOB_OFFER } from '../actionTypes';

const initialState = {
};

export default function(state = initialState, action: any) {
    switch(action.type) {
        case ADD_JOB_OFFER: {
            console.log("add job offer")
            return {
                ...state
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

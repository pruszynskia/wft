import { ADD_JOB_OFFER, DELETE_JOB_OFFER, EDIT_JOB_OFFER } from "../actionTypes";

export const addJob = (data: any) => ({
    type: ADD_JOB_OFFER,
    payload: data
});

export const deleteJob = (id: any) => ({
    type: DELETE_JOB_OFFER,
    payload: id
});

export const editJob = (data:any) => ({
    type: EDIT_JOB_OFFER,
    payload: data
})
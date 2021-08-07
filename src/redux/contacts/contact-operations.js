import *as contactsActions from './contacts-actions';

import axios from "axios";

axios.defaults.baseURL='http://localhost:4040';
// import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchContacts=()=>async dispatch=>{
    dispatch(contactsActions.fetchContactsRequest());
    try {
    const {data}=await axios.get('/contacts');
    dispatch(contactsActions.fetchContactsSuccess(data));
    }catch(error){
    dispatch(contactsActions.fetchContactsError(error));
    }
};

export const addContacts=()=>async dispatch=>{
    dispatch(contactsActions.addContactsRequest());
    try {
    const {data}=await axios.post('/contacts');
    dispatch(contactsActions.addContactsSuccess(data));
    }catch(error){
    dispatch(contactsActions.addContactsError(error));
    }
};

export const deleteContacts=id=>async dispatch=>{
    dispatch(contactsActions.deleteContactsRequest());
    try {
    const {data}=await axios.delete(`/contacts/${id}`);
    dispatch(contactsActions.deleteContactsSuccess(data));
    }catch(error){
    dispatch(contactsActions.deleteContactsError(error));
    }
};


import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import {fetchContacts, addContacts, deleteContacts} from './contacts-operation';


const contactsSlice=createSlice({
  name:'contacts',
  initialState:[],
  extraReducers:{
    [fetchContacts.fulfilled]:(state, action)=>{
     state.contacts=action.payload
    },  
    [addContacts.fulfilled]:(state, { payload }) => [payload, ...state],
    [deleteContacts.fulfilled]:(state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  }
})
   const filterSlice=createSlice({
    name:'filter',
    initialState:'',
    reducers:{
      changeFilter:(_, { payload }) => payload,
    }
  });
  
  
  
  const rootReducer = combineReducers({
      contacts:contactsSlice.reducer,
      filter:filterSlice.reducer,
    });
  
  
  export const { addContact, deleteContact } = contactsSlice.actions;
  export const { changeFilter } = filterSlice.actions;
    
  export default rootReducer;

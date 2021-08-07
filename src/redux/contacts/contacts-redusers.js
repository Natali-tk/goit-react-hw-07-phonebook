import { createReducer, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import*as contactsActions from './contacts-actions';
// import initialContacts from '../../data.json';




const contacts = createReducer([], {
  [contactsActions.fetchContactsSuccess]:(state,{payload})=>payload,
  [contactsActions.addContactsSuccess]: (state, { payload }) => [payload, ...state],

  [contactsActions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});


const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

// const contacts = createReducer([], {
//   [addContact]: (state, { payload }) => [payload, ...state],
//   // [fetchContacts.fulfilled]: (state, { payload }) => [payload, ...state],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });


const rootReducer = combineReducers({
  contacts,
  filter,
});
export default rootReducer;


// const contactSlice=createSlice({
//   name:'contacts',
//   initialState:{ entities:[], filter:'', error:null},
//   reducers:{
//     [addContact]: (state, { payload }) => [payload, ...state],
//     [deleteContact]: (state, { payload }) =>state.filter(contact => contact.id !== payload),
//     [changeFilter]: (_, { payload }) => payload,    
//   },
//   extraReducers:{
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       return {contacts: payload, ...state};
//     }
//   }
// })

// export default contactSlice.reducer;

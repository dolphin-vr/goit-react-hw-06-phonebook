import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from "nanoid";

// ## using  createAction and createReducer
// import { createAction, createReducer } from "@reduxjs/toolkit";
// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");
// export const contactsReducer = createReducer([], builder =>
//    builder
//       .addCase(addContact, (state, action)=>{state.push(action.payload)})
//       .addCase(deleteContact, (state, action)=>{return state.filter(el=>el.id !== action.payload)})
// )

// ## using createSlice
const slice = createSlice({
   name: 'contacts',
   initialState: {contacts: []},
   reducers: {
      addContact: {
         reducer(state, action){state.contacts.push(action.payload)},
         prepare(contact){
               return {payload: {
                  id: nanoid(),
                  name: contact.name,
                  phone: contact.phone,}
               }}
      },
      deleteContact(state, action){
         state.contacts = state.contacts.filter(el => el.id !== action.payload);
      }
   }
});

const persistConfig = {
   key: 'contacts',
   storage,
   whitelist: ['contacts'],   
 }
 
export const contactsReducer = persistReducer(persistConfig, slice.reducer);
// export const contactsReducer = slice.reducer;

export const {addContact, deleteContact} = slice.actions;

export const getContacts = state=>state.contacts.contacts;
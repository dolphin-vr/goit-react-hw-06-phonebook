import { nanoid } from "nanoid";

export const contactsReducer = (state = [], action) => {
   switch (action.type) {
      case "contacts/addContact":
         return [...state, action.payload];
      case "contacts/deleteContact":
         return state.filter(el=>el.id !== action.payload);
      default: return state;
   }
};

export const addContact = contact => {
   return{
      type: "contacts/addContact",
      payload: {
         id: nanoid(),
         name: contact.name,
         phone: contact.phone,
      },
   }
 }

export const deleteContact = id =>{
   return{
      type: "contacts/deleteContact",
      payload: id,
   }
 }

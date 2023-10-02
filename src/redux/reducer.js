import { combineReducers } from "redux";

const contactsInitialState = [];

export const contactsReducer = (state = contactsInitialState, action) => {
   switch (action.type) {
      case "contacts/addContact":
         return [...state, action.payload];
      case "contacts/deleteContact":
         return state.filter(el=>el.id !== action.payload);
      default: return state;
   }
};

const filterInitialState = "";

export const filterReducer = (state = filterInitialState, action) => {
   switch (action.type) {
      case "filter/handleFilter":
         return action.payload;
      default: return state;
   }
};

export const rootReducer = combineReducers({
   contacts: contactsReducer,
   filter: filterReducer,
 });

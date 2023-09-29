const initialState = {
   contacts: [],
   filter: "",
 };

export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case "contacts/addContact":
         return {...state,
            contacts: [...state.contacts, action.payload]};
      case "contacts/deleteContact":
         return {...state,
            contacts: state.contacts.filter(el=>el.id !== action.payload),};
      case "filter/handleFilter":
         return{...state,
            filter: action.payload};
      default: return state;
   }
};

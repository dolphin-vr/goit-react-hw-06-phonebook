export const filterReducer = (state = '', action) => {
   switch (action.type) {
      case "filter/handleFilter":
         return action.payload;
      default: return state;
   }
};

export const handleFilter = filter =>{
   return{
      type: "filter/handleFilter",
      payload: filter,
   }
} 

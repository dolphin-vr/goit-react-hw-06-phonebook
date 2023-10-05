// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { createStore } from "redux";
import { 
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";


// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const enhancer = devToolsEnhancer();

//  export const store = createStore(persistedReducer, enhancer);


 export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

 export const persistor = persistStore(store);
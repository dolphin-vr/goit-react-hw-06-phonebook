import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { combineReducers } from "redux";

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
}

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = devToolsEnhancer();

 export const store = createStore(persistedReducer, enhancer);

 export const persistor = persistStore(store);
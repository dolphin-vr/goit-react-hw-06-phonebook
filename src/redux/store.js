import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

 const enhancer = devToolsEnhancer();

 export const store = createStore(persistedReducer, enhancer);

 export const persistor = persistStore(store);
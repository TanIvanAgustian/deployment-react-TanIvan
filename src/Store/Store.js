import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage'

import Slicing from "./Slicing";


const reducers = combineReducers({
    user: Slicing
})

const config = {
    key: 'root',
    storage
}

const persistreducer = persistReducer( config, reducers );

const store = configureStore({reducer: persistreducer})
const persistor = persistStore(store)

export { store, persistor}
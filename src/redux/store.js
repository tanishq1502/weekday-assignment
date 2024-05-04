import { configureStore } from "@reduxjs/toolkit";

import {thunk} from "redux-thunk";

import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage/session'

import { rootReducer } from "./reducers/reducer";

const persistConfig = {
    key: 'root',
    transforms: [
        encryptTransform({
            secretKey: 'my-super-secret-key-one',
        }),
    ],
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: () => [thunk],
    devTools : import.meta.env.VITE_WORKING_ENVIRONMENT === 'LOCAL' //to disable redux devtools in other than develoment environment
})

const persistedStore = persistStore(store);

export { store, persistedStore }
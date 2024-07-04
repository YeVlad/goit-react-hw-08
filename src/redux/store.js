import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

import axios from "axios";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: persistedAuthReducer,
});

axios.defaults.baseURL = "https://connections-api.goit.global";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

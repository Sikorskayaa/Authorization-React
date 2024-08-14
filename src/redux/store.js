import { contactsReducer } from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice";

const contactboxPersistConfig = {
  key: "contactlist",
  storage,
  whitelist: ["contacts"],
};
export const store = configureStore({
  reducer: {
    contactbox: persistReducer(contactboxPersistConfig, contactsReducer),
    filterbox: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

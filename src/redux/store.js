// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import contactsReducer from "./contacts/slice";
// import filterReducer from "./filters/slice";
// import { authReducer } from "./auth/slice";

// const contactsConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["contacts"],
// };

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     contacts: persistReducer(contactsConfig, contactsReducer),
//     filter: filterReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// // const authConfig = {
// //   key: "auth",
// //   storage,
// //   whitelist: ["token"],
// // };

// // const rootReducer = combineReducers({
// //   auth: persistReducer(authConfig, authReducer),
// //   contacts: contactsReducer,
// //   filters: filterReducer,
// // });

// // export const store = configureStore({
// //   reducer: rootReducer,
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // });

// export const persistor = persistStore(store);
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filters/slice";
import contactsReducer from "./contacts/slice";
import { authReducer } from "./auth/slice";
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

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

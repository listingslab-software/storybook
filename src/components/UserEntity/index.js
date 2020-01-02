import React, { useCallback } from 'react'
import initRedux from "./redux/initRedux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import UserEntityDiv from "./UserEntityDiv";

const disablePersitance = true;
const purgeStore = () => {
  console.log(`Persitance Disabled.`);
  localStorage.clear();
};
if (disablePersitance) {
  purgeStore();
}

const persistedRedux = initRedux(); 
const getStore = () => {
  return persistedRedux.store;
};
export { getStore };

export default function UserEntity(props) {
  return (
    <Provider store={persistedRedux.store}>
      <PersistGate loading={null} persistor={persistedRedux.persistor}>
        <UserEntityDiv />
      </PersistGate>
    </Provider>
  );
}
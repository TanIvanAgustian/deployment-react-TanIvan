import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../Store/Store';

import Header from "../Template/Header";
import DetailForm from "./DetailForm";

export default function Detail(){
    return <>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Header />
            <DetailForm />
        </PersistGate>
    </Provider>

    </>
}
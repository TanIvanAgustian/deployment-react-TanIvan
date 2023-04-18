import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../Store/Store';

import Header from "../Template/Header"
import Form from "./form-Createproduct"


export default function CreateProduct(){
    return <>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Form />
        </PersistGate>
    </Provider>
    </>
}
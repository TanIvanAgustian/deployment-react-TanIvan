import {createSlice} from '@reduxjs/toolkit'
import uuid from 'react-uuid';

const initialState = {
    products: [
    {
    id: uuid(),
    productName: "John",
    productImage: "john.jpg",
    productCategory: "Doe",
    productFreshness: "Doe",
    productPrice: "Doe",
    image: "Doe",
    productDescription: "Doe",
    },
    {
        id: uuid(),
        productName: "Ivan",
        productImage: "Ivan.jpg",
        productCategory: "Ivan",
        productFreshness: "Ivan",
        productPrice: "Ivan",
        image: "Ivan",
        productDescription: "Ivan",
        }
    ]
};

export const Slicing = createSlice({
    name: "user",
    initialState: {
        users: initialState
    },
    reducers: {
        adduser: (state, action) => { 
            const newData = {
                ...action.payload,
                id: uuid()
            }
            state.users.products = [...state.users.products, newData];
        },
        deleteuser: (state, action) => {
            var yakin = confirm("Yakin Menghapus Data ?")
            if (yakin) {
                state.users.products = state.users.products.filter((item) => {
                return item.id !== action.payload;
            })
            } else (
                alert("Data Tidak Jadi Dihapus")
            )
        },
        edituser: (state, action) => {
            for (let i=0 ; state.users.products.length > i ; i++){
                if (action.payload.id == state.users.products[i].id){
                    state.users.products[i] = action.payload;
                }
            }
        }
    }
})

export const {adduser,deleteuser,edituser} = Slicing.actions; 
export default Slicing.reducer;
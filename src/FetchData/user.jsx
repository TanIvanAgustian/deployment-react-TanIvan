import axios from 'axios';
import { useState } from 'react';
import getAuthCookie from "../utils/cookies";


export default function FetchDataUser (){
    const [users, setUsers] = useState([])
    const BASE_API = 'https://642c083f208dfe254726049f.mockapi.io/Products/users'

    const getDataUsers = async () => {
        await axios.get(BASE_API).then((response) => {
            setUsers(response.data)
        })
    }

    const addDataUsers = async (data) => {
        await axios.post(BASE_API,{
            username: data.username,
            email:data.email,
            password:data.password,
        }).then((response) => {
            setUsers( (prev) => [...prev,response.data] )
            alert("Register Berhasil")
        })
    }

    return [users, getDataUsers, addDataUsers]
}



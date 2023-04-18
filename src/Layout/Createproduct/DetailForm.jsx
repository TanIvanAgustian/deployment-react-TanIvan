import { useParams } from 'react-router'

import StoreManagement, { getComment } from '../../FetchData/StoreManagement';
import { Link } from 'react-router-dom';
import { useState } from 'react';

let item = [];
let initialvalue={
    nama: "",
    komentar: ""
}

export default function DetailForm(){
    const { id } = useParams()
    const {data} = StoreManagement()
    const {addComment} = getComment()
    const [comment,setcomment] = useState(initialvalue)

    const findData = () => {
        for (let i=0;i<data.Products.length;i++){
            if (data.Products[i].id == id){
                item = data.Products[i] 
            }
        }
    }

    const handleComment= e => {
        const name = e.target.name;
        const value = e.target.value;

        setcomment({
            ...comment,
            [name]:value
        })
    }

    const addDataComment= () => {
        addComment({
            variables:{
                object:{
                    name: comment.nama,
                    comment: comment.komentar,
                    product_id: id
                }
            }
        })
        alert("Komentar Terkirim")
    }
    
    return (<>
    <center><h1 style={{marginBottom : 100, marginTop: 100}}> Detail Data </h1></center>

    <div className='container' onLoad={findData()}>
        <div className='row'>
            <div className='col-4' style={{marginBottom : 80}}>
                <h4 style={{marginBottom : 50}}>ID</h4>
                <p>Nama Product</p>
                <p>Kategori Produk</p>
                <p>Foto Produk</p>
                <p>Freshness Product</p>
                <p>Deskripsi Product</p>
                <p>Harga Produk</p>    
            </div>
            <div className='col mb-10' style={{marginBottom : 80}}>
                <h4 style={{marginBottom : 50}}>: {item.id}</h4>
                <p>: {item.product_Name}</p>
                <p>: {item.products_Category}</p>
                <p>: {item.product_Image}</p>
                <p>: {item.product_Freshness}</p>
                <p>: {item.product_Description}</p>
                <p>: {item.product_Price}</p>
            </div>
        </div>
        <Link to={"/products/comment/"+item.id}><button>Lihat Comment</button></Link><br /><br />
        <h2>Form Comment : </h2>
        <h6>Username :</h6>
        <input type="text" name='nama' onChange={handleComment} value={comment.nama} /><br />
        <h6>Comment :</h6>
        <textarea name="komentar" id="komentar" cols="30" rows="5" onChange={handleComment} value={comment.komentar}></textarea><br />
        <button className='btn btn-primary'  onClick={()=>addDataComment()}>Submit Comment</button>
    </div>
    
    </>
    )
}

import {  useState } from "react";
import StoreManagement from "../../FetchData/StoreManagement";
import Header from "../Template/Header";
import { Link } from "react-router-dom";

export default function ViewAllProducts(){
    
    const {data} = StoreManagement()
    const [Search, setSearch] = useState("")


    const onChangehandler = (e) => {
        const value = e.target.value;
        setSearch(value)
    }

    return <>
    <Header></Header>
    <center><h2>ALL PRODUCTS</h2></center>
    <h5>Search Product :</h5>
    <input type="text" name="search" value={Search} onChange={onChangehandler}/>
    <Link to={"/products/"+Search}><button className='btn btn-primary'>Search</button></Link>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {data?.Products.map((post) =>(
        <div className="col" key={post.id} style={{marginBottom:"20px"}} >
            <div className="card h-100" style={{width:"300px"}} >
                <img src={post.Product_Image} className="card-img-top" alt="Gagal Load"></img>
                <div className="card-body">
                    <h5 className="card-title">{post.product_Name}</h5>
                    <p className="card-text">{post.product_Description}</p>
                </div>
                <div className="card-footer">
                    <Link to={"/ViewAllProducts/"+post.id}><button>View Detail</button></Link>
                </div>
            </div>
        </div>
        ))}
    </div>
    </>
}
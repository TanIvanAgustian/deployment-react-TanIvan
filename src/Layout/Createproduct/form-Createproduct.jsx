import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { useFormik } from "formik"
import uuid from 'react-uuid';

import logo from '../../assets/bootstrap-logo.png';
import article from "./article";
import StoreManagement from '../../FetchData/StoreManagement';

let dataSend = [];

export async function getPost() {
  return { posts: dataSend }
}
  

export default function Form(){
  const [language,setlanguage] = useState("en");
  const InputImageRef = useRef(null)
  const ImageRef = useRef(null)
  const {data, addProducts, updateProducts, deleteProducts} = StoreManagement()

  
    const formik = useFormik({
        initialValues: {
          id: uuid(),
          productName: "",
          productCategory: "",
          productImage: "",
          productFreshness: "",
          productDescription: "",
          productPrice: ""
        },
        validationSchema: Yup.object({
            productName: Yup.string()
                .min(6, "Product Name minimal 6 karakter!")
                .max(25, "Product Name maksimal 25 karakter!")
                .matches("^[a-zA-Z\s'-]{1,100}$", "Product Name Tidak Boleh mengandung Simbol")
                .required("Product Name Tidak Boleh Kosong!"),
            productCategory: Yup.string()
                .required("Product Category Tidak Boleh Kosong!"),
            productFreshness: Yup.string()
                .required("Product Freshness Tidak Boleh Kosong!"),
            productDescription: Yup.string()
                .required("Product Description tidak Boleh Kosong!"),
            productPrice: Yup.string()
                .required("Product Price tidak Boleh Kosong!"),
            }),
            onSubmit: (e) => {
              addProducts({
                variables:{
                  object:{
                    product_Name: formik.values.productName,
                    products_Category: formik.values.productCategory,
                    product_Freshness: formik.values.productFreshness,
                    product_Image: formik.values.productImage,
                    product_Description: formik.values.productDescription,
                    product_Price: formik.values.productPrice,
                  }
                }
              })
                e.preventDefault()
            }
        });

  const changeLanguage = (e) => {
    if (language == "en"){
      setlanguage("id");
    } else {
      setlanguage("en");
    }
  }

  const handleHapus = (idx) => {
    deleteProducts({
      variables: {
        id : idx,
      }
    })
    console.log(idx)
  }

  function ShowImages(){
    const imgFile = InputImageRef.current.files[0]
    const reader = new FileReader()
    reader.onload = e => {
      ImageRef.current.src = e.target.result
    }
    reader.readAsDataURL(imgFile)
  }

  function EditData(idx){
    if (6 >= formik.values.productName.length){
      alert("Product Name harus berupa 6 sampai 10 karakter")
    } else if (formik.values.productCategory.length <= 0){
      alert("Product Category Tidak Boleh kosong")
    } else if (formik.values.productFreshness.length <= 0){
      alert("Product Freshness Tidak Boleh kosong")
    } else if (formik.values.productDescription.length <= 0){
      alert("Product Description Tidak Boleh kosong")
    } else if (formik.values.productPrice.length <= 0){
      alert("Product Price Tidak Boleh kosong")
    } else {
      updateProducts({
        variables: {
          id:idx,
          object: {
            product_Name: formik.values.productName,
            products_Category: formik.values.productCategory,
            product_Freshness: formik.values.productFreshness,
            product_Image: formik.values.productImage,
            product_Description: formik.values.productDescription,
            product_Price: formik.values.productPrice,
          }
        }
      })
    }
  }

    return <>
    <img
    src={logo}
    className="rounded mx-auto d-block"
    alt="gagal load"
    style={{ width: 50, height: 50}}
  />
  <h1 style={{ fontSize: 31, marginTop: 23 }}>
    <center>
      <button onClick={changeLanguage} className='btn btn-primary mb-3' >Change Language</button><br />
      {article.title[language]}
    </center>
  </h1>
  <center>
    <span>
      <center className='w-75'>
        {article.description[language]}
      </center>
    </span>
  </center>
  <div className="container" style={{ marginTop: 63 }}>
    <div className="row">
      <div className="col-3" />
      <div className="col-6">
        <form className="needs-validation" onSubmit={formik.handleSubmit} >
          <div className="form-group">
            <div className="col-6">
              <h4>Detail Product</h4>
              <label htmlFor="product" >Product Name</label>
              <br />
              <input
                data-testid="name"
                className="form-control"
                type="text"
                name="productName"
                id="product"
                value={formik.values.productName}
                onChange={formik.handleChange}
              />
              {formik.errors.productName && formik.touched.productName && (
                <div className="form-text text-danger" data-testid="error">
                    {formik.errors.productName}
                </div>   
              )}
              <br />
              <label htmlFor="category">Product Category</label>
              <select className="form-control" name="productCategory" id="category" onChange={formik.handleChange} data-testid="category">
                Product Category :
                <option value="">--Pilih Salah Satu--</option>
                <option value="Makanan">Makanan</option>
                <option value="Minuman">Minuman</option>
                <option value="Snack">Snack</option>
              </select>
              {formik.errors.productCategory && formik.touched.productCategory && (
                <div className="form-text text-danger" data-testid="error">
                    {formik.errors.productCategory}
                </div>   
              )}
              <br />
              <label htmlFor="file">Image Of Product :</label>
              <br />
              <input className="form-control" type="file" id="formFile" ref={InputImageRef} onChange={ShowImages} data-testid="image" />
              <div className='col'>
                <label htmlFor="Review">Review Gambar :</label><br />
                <img src="" width={300} alt="anda Belum Memilih Gambar" ref={ImageRef} /> 
              </div>
              {formik.errors.productImage && formik.touched.productImage && (
                <div className="form-text text-danger" data-testid="error">
                    {formik.errors.productImage}
                </div>   
              )}
              <br />
              <label htmlFor="freshness"  style={{ marginTop: 10 }}>
                Product Freshness :
              </label>{" "}
              <br />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="freshness"
                  onChange={formik.handleChange}
                  defaultValue="Brand New"
                />
                <label className="form-check-label" htmlFor="new">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="freshness"
                  onChange={formik.handleChange}
                  defaultValue="Second Hand"
                />
                <label className="form-check-label" htmlFor="secondhand">
                  Second Hand
                </label>
              </div>
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="freshness"
                  onChange={formik.handleChange}
                  defaultValue="Refufbushed"
                />
                <label className="form-check-label" htmlFor="refufbushed">
                  Refufbushed
                </label>
              </div>
            </div>
            {formik.errors.productFreshness && formik.touched.productFreshness && (
                <div className="form-text text-danger" data-testid="error">
                    {formik.errors.productFreshness}
                </div>   
              )}
            <div className="col-12" style={{ marginTop: 20 }}>
              <label htmlFor="deskripsi">Additional Description :</label>
              <br />
              <textarea
                data-testid="description"
                name="productDescription"
                className="form-control"
                id="deskripsi"
                cols={30}
                rows={5}
                style={{ width: "100%" }}
                value={formik.values.productDescription}
                onChange={formik.handleChange}
              />
              {formik.errors.productDescription && formik.touched.productDescription && (
                <div className="form-text text-danger" data-testid="error">
                    {formik.errors.productDescription}
                </div>   
              )}
              <br />
              <label htmlFor="price">Product Price :</label>
              <br />
              <input
                data-testid="price"
                type="number"
                name='productPrice'
                className="form-control"
                id="price"
                placeholder="$100"
                value={formik.values.productPrice}
                onChange={formik.handleChange}
              />
              {formik.errors.productPrice && formik.touched.productPrice && (
                <div className="form-text text-danger" data-testid="error">
                    {formik.errors.productPrice}
                </div>   
              )}
              <br />
              <a>
                <input
                  data-testid="submit"
                  type="submit"
                  style={{ marginTop: 138, width: "100%" }}
                  className="btn btn-primary"
                  defaultValue="Submit"
                />
              </a>
            </div>
          </div>
        </form>
      </div>
    {/* bagian table */}
    </div>
    <div>
    <center><h2>List Produk</h2></center>

    <table className="table table-striped" id="tableproduct">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope='col'>Product Image</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope='col'>Action</th>
            </tr>
        </thead>
        <tbody id="item">
          { data?.Products.map((post) => (
              <tr key={ post.id } data-testid="jumlahData">
                <Link to={`/Createproduct/${post.id}`}>
                <td>{ post.id }</td>
                </Link>
                <td>{ post.product_Name }</td>
                <td><img src={post.product_Image} width={100} /></td>
                <td>{ post.products_Category }</td>
                <td>{ post.product_Freshness }</td>
                <td>{ post.product_Price }</td>
                <td>
                  <button className='btn btn-primary' onClick={() => EditData(post.id)}>Edit</button>
                  <button className='btn btn-danger' data-testid="delete" onClick={() => handleHapus(post.id)}>Hapus</button>
                </td>
              </tr>
          )) }
        </tbody>
    </table>
    </div>
    </div>
    </>
};
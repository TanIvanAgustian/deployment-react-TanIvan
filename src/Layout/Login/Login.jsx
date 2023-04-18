import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FetchDataUser from '../../FetchData/user'
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import setAuthCookie from '../../utils/cookies';
import uuid from 'react-uuid'

export default function Login(){
    const [users, getDataUsers] = FetchDataUser()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email Tidak Valid!")
                .required("Email harus Diisi"),
            password: Yup.string()
                .required("Password Tidak Boleh Kosong!")
                .min(8,"Password harus lebih panjang dari 8 karakter"),
            }),
            onSubmit: () => {
                for ( let i = 0; users.length>i ; i++ ){
                    let isuservalid = false;
                    if (users[i].email == formik.values.email && users[i].password == formik.values.password){
                        setAuthCookie(uuid())
                        navigate("/LandingPage")
                        isuservalid = true;
                    }
                }
                if (isuservalid == false){
                    alert("User Tidak Ditemukan")
                }
            }
        });

    useEffect(() => {
        getDataUsers()
    },[])

    return <>
    <section className="vh-1000" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                        </p>
                        <form className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label" htmlFor="form3Example3c">
                                            Email :
                                        </label>
                                        <input
                                            name="email"
                                            type="text"
                                            id="form3Example3c"
                                            className="form-control"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                            {formik.errors.email && formik.touched.email && (
                                                <div className="form-text text-danger" data-testid="error">
                                                    {formik.errors.email}
                                                </div>   
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label" htmlFor="form3Example3c">
                                            Password :
                                        </label>
                                        <input
                                            name='password'
                                            type="password"
                                            id="form3Example3c"
                                            className="form-control"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                        />
                                            {formik.errors.password && formik.touched.password && (
                                                <div className="form-text text-danger" data-testid="error">
                                                    {formik.errors.password}
                                                </div>   
                                            )}   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">
                            Login
                            </button>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
}
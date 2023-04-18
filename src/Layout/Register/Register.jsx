import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { replace, useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import FetchDataUser from '../../FetchData/user'

export default function Register(){
    
    const navigate = useNavigate();
    const [users, getDataUsers, addDataUsers] = FetchDataUser()
    
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            confirm_Password: ""
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .min(3, "First Name minimal 3 karakter!")
                .required("First Name Tidak Boleh Kosong!"),
            lastname: Yup.string()
                .min(3, "First Name minimal 3 karakter!")
                .required("First Name Tidak Boleh Kosong!"),
            username: Yup.string()
                .required("Username Tidak Boleh Kosong!"),
            email: Yup.string()
                .email("Email Tidak Valid!")
                .required("Email tidak Boleh Kosong!"),
            password: Yup.string()
                .min(8, "Password minimal 8 Karakter!")
                .required("Password tidak Boleh Kosong!"),
            confirm_Password: Yup.string()
                .oneOf([Yup.ref("password")], "Password Tidak Sama")
                .required("Confirm Password tidak Boleh Kosong!!")
            }),
            onSubmit: async (e) => {
                await addDataUsers(formik.values)
                navigate("/login")
            }
        });
    

    return <>
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register
                        </p>
                        <form className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label" htmlFor="form3Example1c">
                                            First Name
                                        </label>
                                        <input
                                            name = "firstname"
                                            type="text"
                                            id="form3Example1c"
                                            className="form-control"
                                            value={formik.values.firstname}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.firstname && formik.touched.firstname && (
                                            <div className="form-text text-danger">
                                                {formik.errors.firstname}
                                            </div>   
                                        )}
                                    </div>
                                    <div className="col">
                                        <label className="form-label" htmlFor="form3Example1c">
                                            Last Name
                                        </label>
                                        <input
                                            name = "lastname"
                                            type="text"
                                            id="form3Example1c"
                                            className="form-control"
                                            value={formik.values.lastname}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.lastname && formik.touched.lastname && (
                                            <div className="form-text text-danger">
                                                {formik.errors.lastname}
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
                                            Username :
                                        </label>
                                        <input
                                            name='username'
                                            type="text"
                                            id="form3Example3c"
                                            className="form-control"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.username && formik.touched.username && (
                                            <div className="form-text text-danger">
                                                {formik.errors.username}
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
                                            Email :
                                        </label>
                                        <input
                                            name='email'
                                            type="text"
                                            id="form3Example3c"
                                            className="form-control"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.email && formik.touched.email && (
                                            <div className="form-text text-danger">
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
                                            <div className="form-text text-danger">
                                                {formik.errors.password}
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
                                            Confirm Password :
                                        </label>
                                        <input
                                            name='confirm_Password'
                                            type="password"
                                            id="form3Example3c"
                                            className="form-control"
                                            value={formik.values.confirm_Password}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.confirm_Password && formik.touched.confirm_Password && (
                                            <div className="form-text text-danger">
                                                {formik.errors.confirm_Password}
                                            </div>   
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Register
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
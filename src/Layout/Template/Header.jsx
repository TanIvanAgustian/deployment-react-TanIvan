import '../Createproduct/CreateProduct.css'
import { Link, useNavigate } from "react-router-dom"
import { removeAuthCookie } from '../../utils/cookies'



export default function Header(){
  const navigate = useNavigate()

  const handleOnLogout = () =>{
    removeAuthCookie()
    navigate('/login')
  }

    return <nav
    className="navbar navbar-expand-lg navbar-light bg-light"
    style={{ marginBottom: 71 }}
  >
    <a className="navbar-brand" href="#">
      Simple Header
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to={"/LandingPage"}>
            <button
              className="nav-link btn btn-primary"
              id = "home"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Home
            </button>
          </Link>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  Maaf, Halaman Yang diinginkan belum tersedia
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    tutup
                  </button>
                  <button type="button" className="btn btn-primary">
                    Oke
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <button className='btn btn-danger' onClick={() => handleOnLogout()}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  </nav>
}
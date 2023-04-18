import Header from '../Template/Header'
import './landingPage.css'
import logo from "../../assets/hero-img.png"
import { Link } from "react-router-dom"
import { getAuthCookie } from '../../utils/cookies'
import { LandingPageStoreManagement } from '../../FetchData/StoreManagement';

export default function LandingPage(){

    const {data} = LandingPageStoreManagement()

    return <>
    <div className="container1">
        <Header></Header>
        <h1>Better Solution For Your Business</h1>
        <h2>we are team of talented designer making websites with Bootstrap</h2>
        <a id="getstarted">
            <Link to={"/Createproduct"}>
                <label>Get Started</label>
            </Link>
        </a>
        <a href="#" id="watchvideo">
        <label>watch video</label>
        </a>
        <img alt="gagal Load" className='gambar' srcSet={logo} />
    </div>
    <div className="card-deck" style={{marginTop:"800px"}}>
        {data?.Products.map((post) =>(
            <div key={post.id} className="card">
            <img className="card-img-top" src={post.product_Image} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{post.product_Name}</h5>
                <p className="card-text">{post.product_Description}</p>
            </div>
            <div className="card-footer">
            <Link to={"/ViewAllProducts/"+post.id}><button>View Detail</button></Link>
            </div>
        </div>
        ))}
    </div>
    <Link to={"/ViewAllProducts"}><button className='btn btn-primary'>See More...</button></Link>
    
    <div className="container2">
        <div className="contain">
        <h2>Join Our Newsletter</h2>
        <h3>
            Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </h3>
        <form action="createProduct.html">
            <input type="text" name="news" id="news" required="" />
            <a href="createProduct.html">
            <label>Subscribe</label>
            </a>
        </form>
        </div>
    </div>
    <footer>
        <div className="containfooter">
        <div className="block">
            <h1>Arsha</h1>
            <label>
            A108 Adam Street
            <br />
            New York, NY 535022
            <br />
            United States <br />
            <br />
            Phone: +1 5589 55488 55
            <br />
            Email: info@example.com
            </label>
        </div>
        <div className="block2">
            <h1>Useful Links</h1>
            <ul>
            <div className="li">Home</div>
            <div className="li">About Us</div>
            <div className="li">Services</div>
            <div className="li">Term Of Service</div>
            <div className="li">Privacy Policy</div>
            </ul>
        </div>
        <div className="block3">
            <h1>Our Services</h1>
            <ul>
            <div className="li">Web Design</div>
            <div className="li">Web Development</div>
            <div className="li">Product Management</div>
            <div className="li">Marketing</div>
            <div className="li">Graphic Design</div>
            </ul>
        </div>
        <div className="block4">
            <h1>Our Social Network</h1>
            <label>
            Cras fermentum odio eu feugiat lide par <br />
            naso tierra videa magna derita valies
            </label>
            <br />
            <div className="bulat">
            <p />
            <p />
            <p />
            <p />
            <p />
            </div>
        </div>
        </div>
        <div className="foot">
        <label style={{ left: 93 }}>
            Copyright <strong>Arsha.</strong> All Rights Reserved
        </label>
        <label style={{ right: 180 }}>Designed by </label>
        <label style={{ color: "lightblue", right: 93 }}>BootstrapMade</label>
        </div>
    </footer>
    </>
}
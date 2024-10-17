import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {

  return (
   /* <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src="assets/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/h/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/h/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/h/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/h/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/h/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/h/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout} >Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>*/
    < div>
    

    <div className="section header">
        
        <div className="header-bottom-section">

            <div className="container-fluid custom-container">
                <div className="header-bottom-wrap">

                    <div className="header-logo-menu">

                        <div className="header-logo">
                            <Link to="/h"><img src="assets/images/logo.png" alt="logo"/></Link>
                        </div>

                        

                    </div>


                   

                        <div className="header-login d-none d-lg-block" >
         
                            <Link className="link" to="/registre" style={{marginRight:"100px"}}><i className="far fa-user"></i> registre</Link>
                           


                        </div>

                       
                        <div className="header-toggle d-lg-none">
                            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    </div>
    
  );
};

export default Navbar;

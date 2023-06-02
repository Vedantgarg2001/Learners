import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import {Link,useNavigate} from "react-router-dom"

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/about",
  },

  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "Pages",
    url: "/pages",
  },
  {
    display: "Blog",
    url: "/blogs",
  }
  
];

const Header = () => {
  const menuRef = useRef();
  const navigate =useNavigate()
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const handleLogout = ()=>{
    localStorage.removeItem('access')
    navigate('/login')
  }

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
                {!localStorage.getItem('access')?<div>
                <span className="nav__item noUnder"><Link to="/login">Login</Link></span>
                <span className="nav__item noUnder"><Link to="/signup">SignIn</Link></span>
                </div>:<div><span className="nav__item noUnder"><Link onClick={handleLogout} to="/login">Logout</Link></span></div>}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

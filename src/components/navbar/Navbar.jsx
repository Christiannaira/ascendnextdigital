import "./navbar.css";
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <div className="top-navigation d-md-flex justify-content-between align-items-center">

            <div className="top-navigation_logo d-inline-flex align-items-center justify-content-center">
                <h2 className="logo text-white">ascendnextdigital</h2>
            </div>

            <nav className="top-navigation_pages">

                <NavLink to='/blogs' className="navigation-link">
                    Blogs
                </NavLink>

                <NavLink to='/casestudies' className="navigation-link">
                    Case Studies
                </NavLink>

            </nav>

            <div className="top-navigation_menubar d-none">

                <div className="menu menu01"></div>
                <div className="menu menu02"></div>
                <div className="menu menu03"></div>

            </div>


        </div>
    )
}

export default Navbar

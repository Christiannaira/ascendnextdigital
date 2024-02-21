import { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom"


const NavLinks = () => {

    return (
        <div className="top-navigation_pages-container">

            <NavLink to='/blogs' className="navigation-link">
                Blogs
            </NavLink>

            <NavLink to='/casestudies' className="navigation-link">
                Case Studies
            </NavLink>

        </div>
    )

}

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <div className="top-navigation d-flex justify-content-between align-items-center">

            <div className="top-navigation_logo d-inline-flex align-items-center justify-content-center">
                <h2 className="logo text-white">ascendnextdigital</h2>
            </div>

            <nav className="top-navigation_pages">

                <NavLinks />

            </nav>

            <div className="top-navigation_menubar" onClick={() => setMenu(!menu)}>

                <div className="menu menu01"></div>
                <div className="menu menu02"></div>
                <div className="menu menu03"></div>

                {menu ? (
                    <div className="top-navigation_menubar-open">

                        <NavLinks />

                    </div>) : ''}

            </div>





        </div>
    )
}

export default Navbar

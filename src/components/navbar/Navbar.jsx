import { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom"


const NavLinks = () => {

    return (
        <div className="top-navigation--pages__container">

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
    const menuRef = useRef(null);

    const handleWindow = (event) => {

        if (menuRef.current && menuRef.current.contains(event.target)) {
            return;
        }

        setMenu(false);

    }

    const handleScroll = () => {

        const scrollY = window.scrollY || document.documentElement.scrollTop;

        if (scrollY > 0) {
            setMenu(false);
        }

    }

    useEffect(() => {

        window.addEventListener("click", handleWindow);
        window.addEventListener('scroll', handleScroll)

        return () => {

            window.removeEventListener("click", handleWindow);
            window.removeEventListener("scroll", handleScroll);

        }

    }, [])

    return (
        <div className="top-navigation d-flex justify-content-between align-items-center">

            <div className="top-navigation--logo-container d-inline-flex align-items-center justify-content-center">

                <h2 className="top-navigation--logo-container__logo">ascendnextdigital</h2>

            </div>

            <nav className="top-navigation--pages">

                <NavLinks />

            </nav>

            <div className="top-navigation--menubar" ref={menuRef} onClick={() => setMenu(!menu)}>

                <div className="menu menu01"></div>
                <div className="menu menu02"></div>
                <div className="menu menu03"></div>

                {menu ? (
                    <div className="top-navigation--menubar__open scale-in-center">

                        <NavLinks />

                    </div>) : ''}

            </div>





        </div>
    )
}

export default Navbar

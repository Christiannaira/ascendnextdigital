import "./navbar.css";

const Navbar = () => {
    return (
        <div className="top-navigation d-md-flex justify-content-between align-items-center">

            <div className="top-navigation_logo d-inline-flex align-items-center justify-content-center">
                <h2 className="logo text-white">ascendnextdigital</h2>
            </div>

            <nav>
                <a href="">Blogs</a>
                <a href="">Case Studies</a>
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

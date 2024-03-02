import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import { Logo } from "../navbar/Navbar";



const Footer = () => {
    return (

        <section className="footer" id="fooer">

            <div className="footer-content">

                <div className="footer-logo">
                    <a href="#home"><Logo /></a>
                </div>

                <div className="footer-info">
                    <p>Email: Ascendnextdigital@gmail.com</p>
                    <p>Contact: 111-222-333</p>
                </div>

                <div className="footer-socials">

                    <a href="" target="_blank"><FaFacebookSquare /></a>
                    <a href="" target="_blank"><RiInstagramFill /></a>

                </div>

                <div className="footer-copyrights">
                    <p>© 2024 Ascendnext Digital. All Rights Reserved.</p>
                </div>

            </div>





        </section>

    )
}

export default Footer

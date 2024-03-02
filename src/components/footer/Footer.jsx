import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { Link } from "react-router-dom";




const Footer = () => {
    return (

        <section className="footer" id="fooer">

            <div className="footer-content">

                <div className="footer-logo">
                    <h2>Ascendnext Digital</h2>
                </div>

                <div className="footer-info">
                    <p>Email: Ascendnextdigital@gmail.com</p>
                    <p>Contact: 111-222-333</p>
                </div>

                <div className="footer-socials">

                    <a href=""><FaFacebookSquare /></a>
                    <a href=""><RiInstagramFill /></a>

                </div>

                <div className="footer-copyrights">
                    <p>© 2024 Ascendnext Digital. All Rights Reserved.</p>
                </div>

            </div>





        </section>

    )
}

export default Footer

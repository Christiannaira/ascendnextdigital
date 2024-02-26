import "./footer.css";
// import { FaFacebookSquare, RiInstagramFill } from "react-icons";




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

                    {/* <FaFacebookSquare />
                    <RiInstagramFill /> */}


                </div>

                <div className="footer-copyrights">
                    <p>© 2024 Ascendnext Digital. All Rights Reserved.</p>
                </div>

            </div>

        </section>

    )
}

export default Footer

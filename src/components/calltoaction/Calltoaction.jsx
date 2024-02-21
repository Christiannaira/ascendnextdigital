import Button from "../../minicomponents/button/Button";
import "./calltoaction.css";
import Book from "../../assets/leadmagnet.png";

const Calltoaction = () => {
    return (

        <section className="calltoaction" id="calltoaction">

            <div className="cta-gradient" />

            <div className="calltoaction-content">

                <h2>Who We Work With</h2>
                <p>We Only Work With Online Coaches, Content Creators, Consultants & Brand Owners <span className="highlight">Who Are Actively Creating Contents or Committed to Getting Started</span>.</p>
                <p>If You are One Of Them And You are <span className="highlight">Too BUSY </span> To Create A Solid Content Consistently, Our Proven System Is Perfect For You!</p>

                <div className="calltoaction-content_main">

                    <h3>Book Your Free Discovery Call Now! So, We Can Start Kicking Off Your Social Media Presence <span style={{ color: "red" }}>PLUS</span> You Will Get A Free E-BOOK to 10x Your Leads & Sales!!</h3>

                    <div className="calltoaction-content_main-img">

                        <img src={Book} alt="book" title="start-with-why" />

                        <div className="calltoaction-content_main-img-button">

                            <Button />

                        </div>


                    </div>

                </div>

            </div>

        </section>

    )
}

export default Calltoaction

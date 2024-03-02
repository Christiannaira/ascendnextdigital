import "./home.css";
import { Button } from "../../minicomponents";


const Home = () => {

    return (

        <section className="home p-relative z-100" id="home" data-aos="fade-up">

            {/*home gradient*/}
            <div className="gradient" />

            <div className="home-content">

                <header className="home-content--title" >

                    <h2 className="home-content--title__niche brand-highlight">
                        Attention: High-Tickets Coaches, Consultants, Brands & Content Creators.
                    </h2>

                    <h1 className="home-content--title__main">

                        We Skyrocket Your Social Media Presence in the First 90 Days. Quality & Organic Views. <span className="home-content--title__main-highlight">
                            No Results, No bills!!
                        </span>
                    </h1>

                    <p className="home-content--title__secondary">

                        Place your Personal Brand into the

                        <span className="highlight">
                            &nbsp;
                            SPOTLIGHT
                            &nbsp;
                        </span>

                        using our proven system.

                    </p>

                </header>

                <div className="home-content--button">

                    <Button />

                </div>

                <div className="home-content--vsl">

                    <iframe width="1150" height="705" src="https://www.youtube.com/embed/ceYIRmmf7D8?playlist=ceYIRmmf7D8&loop=1;rel=0&autoplay=1&controls=0&showinfo=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-5"></iframe>

                </div>

                <div className="home-content--cta">

                    <p className="home-content--cta__text">
                        If you are a coach, consultant, brand owner or a content creator looking to <span className="highlight">grow your business without ad spend</span>, then this video is surprisingly <span className="highlight">REMARKABLE</span> .
                    </p>

                    <p className="home-content--cta__text">
                        “Let us retire you from doing everything without seeing results.”
                    </p>

                    <div className="home-content--cta__button">

                        <Button />

                    </div>

                </div>

            </div>

            {/*home arrow icon transition*/}

            <div className="arrow-down">

                <div className="arrow-down--container">

                    <div className="arrow-down--bullet" />

                </div>

            </div>

        </section>
    )
}

export default Home

import { useEffect } from "react";
import { Home, Calltoaction, Challenges, Footer, Navbar, Partners, Process, Team, Testimonials, Lastcall } from "../components";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Mainpage = () => {

    useEffect(() => {

        AOS.init({
            duration: 900,
        });

    }, []);

    return (
        <div className="mainpage" id="mainpage">

            <Helmet>
                <title>Skyrocket Your Social Media Presence In Just 90 Days</title>
                <meta name="description" content=" We Skyrocket Your Social Media Presence in the First 90 Days. Quality & Organic Views." />
                <meta name="author" content="Ascendnext Digital" />
                <meta name="keywords" content="Digital Marketing, Content Creation, Social Media Management, Video Editing" />
                <meta property="og:title" content="We Skyrocket Your Social Media Presence In The First 90 Days" />
                <meta property="og:description" content="Place your personal brand into the SPOTLIGHT using our proven system." />
                <meta property="og:site_name" content="Ascendnext Digital" />
                <meta property="og:url" content="https://ascendnextdigital.vercel.app/" />
            </Helmet>

            <header>
                <Navbar />
            </header>

            <main>

                <Home />

                <Challenges />

                <Calltoaction />

                <Process />

                <Testimonials />

                <Partners />

                <Team />

                <Lastcall />

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Mainpage

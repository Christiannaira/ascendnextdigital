import { useEffect } from "react";
import { Home, Calltoaction, Challenges, Footer, Navbar, Partners, Process, Team, Testimonials, Lastcall } from "../components";
import AOS from "aos";
import 'aos/dist/aos.css';

const Mainpage = () => {

    useEffect(() => {

        AOS.init({
            duration: 900,
        });

    }, []);

    return (
        <div className="mainpage" id="mainpage">

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

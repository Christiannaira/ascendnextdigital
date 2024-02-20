import { Home, Calltoaction, Challenges, Footer, Navbar, Partners, Process, Team, Testimonials } from "../components";

const Mainpage = () => {
    return (
        <div className="mainpage" id="mainpage">

            <header>
                <Navbar />
            </header>

            <main>

                <Home />

                <Calltoaction />

                <Challenges />

                <Partners />

                <Process />

                <Team />

                <Testimonials />

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Mainpage

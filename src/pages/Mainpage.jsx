import { Home, Calltoaction, Challenges, Footer, Navbar, Partners, Process, Team, Testimonials } from "../components";

const Mainpage = () => {
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

                <Partners />



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

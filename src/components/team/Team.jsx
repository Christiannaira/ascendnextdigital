import { team } from "../../constants";
import "./team.css";
import { Titles } from "../../minicomponents/"

const TeamCard = ({ member, role, image }) => {

    return (
        <>
            <div className="team-content_card" data-aos="fade-up">



                <div className="team-content_main">

                    <div className="team-content_image">
                        <img src={image} alt="image" loading="lazy" />
                    </div>

                    <div className="team-content_member">
                        <h3>{member}</h3>
                        <h4>{role}</h4>
                    </div>

                </div>



            </div>



        </>
    )

}

const Team = () => {
    return (

        <section className="team" id="team">


            <Titles title="Why Us" subtitle="Meet Our Core Team" />

            <div className="team-about-us">
                <p>We're a team of digital marketing wizards with over a decade of experience. We offer tailored solutions that are designed to <span className="highlight">help you increase sales, boost traffic, attract potential customers, and convert them into paying clients</span>.</p>
            </div>

            <div className="team-content">

                {team.map((person, index) => (

                    <TeamCard key={index} member={person.member} role={person.role} image={person.image} />

                ))}

            </div>

        </section>

    )
}

export default Team

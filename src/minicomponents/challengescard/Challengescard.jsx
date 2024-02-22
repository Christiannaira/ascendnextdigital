import "./challengescard.css";

const Challengescard = ({ challenge }) => {
    return (

        <div className="challenge-container_card d-md-flex align-items-center justify-content-between fade-in" data-aos="fade-up">

            <h3>{challenge.problem}</h3>

            <p className=""> {challenge.solution}</p>

        </div>
    )
}

export default Challengescard

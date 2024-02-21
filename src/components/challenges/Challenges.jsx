import { challenges } from "../../constants";
import { Challengescard, Titles } from "../../minicomponents";
import "./challenges.css";

const Challenges = () => {
    return (

        <section className="challenges" id="challenges">


            <Titles title={'Challenges'} subtitle={'These Are The Common Challenges We Solve For Our Clients'} />

            <div className="challenges-content">

                {
                    challenges.map((challenge, index) => (
                        <Challengescard challenge={challenge} key={index} />
                    )
                    )
                }

            </div>

        </section>

    )
}

export default Challenges

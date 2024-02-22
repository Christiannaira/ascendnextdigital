import { testimonials } from "../../constants"
import "./testimonials.css";

const ReviewCard = ({ item }) => {

    return (
        <div className="testimonials-content-container" data-aos="zoom-in">

            <div className="testimonials-content-container-words">
                <p>"{item.words}"</p>
            </div>

            <div className="testimonials-content-container-profile">

                <div className="profile-img">
                    <img src={item.image} alt="" />
                </div>

                <div className="profile-texts">
                    <h3>{item.client}</h3>
                    <h4>
                        {item.profession}
                    </h4>
                </div>

            </div>



        </div>
    )

}

const Testimonials = () => {
    return (

        <section className="testimonials" id="testimonials">


            <div className="testimonials-content">

                {testimonials.map((item, index) => (
                    <ReviewCard item={item} key={index} />
                ))}

            </div>


        </section>

    )
}

export default Testimonials

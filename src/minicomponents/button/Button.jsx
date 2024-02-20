import "./button.css";
import { FaArrowUp } from "react-icons/fa6";



const Button = () => {
    return (
        <div className="button-container">


            <button type="button" className="rounded-pill border-0 outline-0 d-inline-flex align-items-center justify-content-center">

                <span className="button-container-text">
                    Book Your Free Discovery Call
                </span>

                <span className="button-container_arrow d-inline-flex align-items-center justify-content-center rounded-pill">

                    <FaArrowUp className="button-arrow" />

                </span>


            </button>

        </div>
    )
}

export default Button

import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Ongoing = () => {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate('/');

    }


    return (

        <section className='ongoing' id='ongoing'>

            <div className="ongoing-home_link" onClick={handleClick}>

                <h2><FaLongArrowAltLeft color="white" size={'1.5rem'} className="ongoing-arrow" /> Go back to home</h2>

            </div>


            <div className="ongoing-content">
                <h1>Coming Soon...</h1>
            </div>



        </section>

    )
}

export default Ongoing

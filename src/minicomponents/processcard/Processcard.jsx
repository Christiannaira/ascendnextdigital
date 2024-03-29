import './processcard.css';

const Processcard = ({ item }) => {
    return (
        <div className='process-container' data-aos="fade-up">

            <div className="process-container_title">
                <h3>{item.title}</h3>
            </div>

            <div className="process-container_info">

                <p>{item.info}</p>

            </div>


        </div>
    )
}

export default Processcard

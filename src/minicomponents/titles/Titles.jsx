import "./titles.css";

const Titles = ({ title, subtitle }) => {
    return (
        <div className="section-title">

            <div className="section-title--sub " data-aos="fade-up">
                <h3 className="section-title--sub__top brand-highlight">{title}</h3>
            </div>

            <div className="section-title--main" data-aos="fade-up">
                <h2 className="section-title--main__top brand-highlight"> {subtitle}</h2>
            </div>

        </div>
    )
}

export default Titles

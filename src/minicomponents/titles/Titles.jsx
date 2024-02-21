import "./titles.css";

const Titles = ({ title, subtitle }) => {
    return (
        <div className="section-title">

            <div className="section-title_sub ">
                <h3 className="section-title_sub-top brand-highlight">{title}</h3>
            </div>

            <div className="section-title_main">
                <h2 className="section-title_main-top brand-highlight"> {subtitle}</h2>
            </div>

        </div>
    )
}

export default Titles

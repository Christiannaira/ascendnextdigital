
import Image01 from "../../assets/logo01.webp";
import Image02 from "../../assets/logo02.webp";
import Image03 from "../../assets/logo03.webp";

import "./partners.css";

const images = [
    {
        image: Image01,
        title: 'logo1'
    },
    {
        image: Image02,
        title: 'logo2'
    },
    {
        image: Image03,
        title: 'logo3'
    },
]

const PartnersCard = ({ item }) => {

    return (
        <div className="partners-content_main">
            <img src={item.image} alt="" />
        </div>
    )

}

const Partners = () => {
    return (

        <section className="partners" id="partners">

            <div className="partners-title">
                <h2>Trusted By:</h2>
            </div>

            <div className="partners-content">
                {images.map((item, index) => (

                    <PartnersCard item={item} key={index} />

                ))}
            </div>


        </section>

    )
}

export default Partners

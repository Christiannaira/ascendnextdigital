import { Titles, Processcard } from "../../minicomponents";
import "./process.css";
import { process } from "../../constants";


const Process = () => {
    return (

        <section className="process" id="process">

            <Titles title={'Our Process'} subtitle={'How Does It Work?'} />


            <div className="process-content">

                {process.map((item, index) => (

                    <Processcard item={item} key={index} />

                ))}

            </div>

        </section>

    )
}

export default Process

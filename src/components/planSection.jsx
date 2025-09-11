import { Component } from "react";
import '../css/planSection.css';
import illustrationDesktop from '../assets/illustration.png';

export class PlanSection extends Component {

    render() {
        return (
        <section className="plan_manage">
            <img src={illustrationDesktop} alt="illustrationDesktop" />
            <h2>DESKTOP AND MOBILE APP</h2>
            <h3><span>Plan</span> and <span>manage</span></h3>
            <p>
                Brute laoreet efficiendi id his, ea illum nonumes luptatum 
                pro. Usu atqui laudem an, insolens gubergren similique 
                est cu. Et vel modus congue vituperata. Solum patrioque 
                no sea. Mea ex malis mollis oporteat. Eum an expetenda
                 consequat.
            </p>
            <button className="videoPlayBtn"><span className="buttonTxt">View video</span></button>
            <button className="seeFeaturesBtn">See features</button>
        </section>
        )
    }
}

export default PlanSection
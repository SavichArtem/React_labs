import { Component } from "react";
import '../css/getStartedSection.css'

export class GetStartedSection extends Component {

    render() {
        return (
        <section class="get_started_section" id="GetStarted">
            <article class="gs_clouds"></article>
            <article class="gs_text">
                <h3>PLAN YOUR LIFE</h3>
                <h2>Get <span>started</span> now</h2>
                <p> Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens
                     gubergren similique est cu. Et vel modus congue vituperata.
                </p>
            </article>
            <article class="gs_btn">
                <button class="viewPricingBtn">View pricing</button>
                <button class="readDocBtn">Read documentation</button>
            </article>
        </section>
        )
    }
}

export default GetStartedSection
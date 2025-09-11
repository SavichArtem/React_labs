import { Component } from "react";
import '../css/heroSection.css'

export class HeroSection extends Component {

    render() {
        return (
        <section className="heroImage">
            <div className="text_illustation">
                <button className="playBtn"></button>
                <h2>PLAN YOUR LIFE</h2>
                <h1>Increase your <span class="title">productivity</span></h1>
                <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus 
            congue vituperata.</p>
            <nav class="slider_nav">
                <a href="" className="firstDot"></a>
                <a href=""></a>
                <a href=""></a>
            </nav>
            </div>
        </section>
        )
    }
}

export default HeroSection
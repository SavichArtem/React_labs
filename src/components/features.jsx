import { Component } from "react";
import '../css/features.css'
import OverviewImg from '../assets/Overview.png'
import FilesPng from '../assets/Files.png'
import MeetPng from '../assets/MeetingChats.png'
import SavePng from '../assets/Save.png'

export class Features extends Component {

    render() {
        return (
        <section className="features" id="Features">
            <article className="cloudsSection">
                <article className="contentSection">
                    <article className="textAboutSection">
                        <h2>ABOUT US</h2>
                        <h3>Read about our app</h3>
                    </article>
                    <article className="featSection">
                        <article className="featuresInf">
                            <img src={OverviewImg} alt="Overview" />
                            <h4>Overview</h4>
                            <p>Brute laoreet efficiendi id
                          his, ea illum nonumes 
                            luptatum pro.
                            </p>
                        </article>
                        <hr/>
                        <article className="featuresInf">
                            <img src={FilesPng} alt="Files"/>
                             <h4>Files</h4>
                             <p>
                             No vim nulla vitae <br/>
                             intellegat. Ei enim error <br/>
                             ius, solet atomorum <br/>
                             conceptam ex has. 
                              </p>
                        </article>
                        <hr/>
                        <article className="featuresInf">
                            <img src={MeetPng} alt="Meeting chats"/>
                            <h4>Meeting chats</h4>
                            <p>
                                 Vim ne tacimates 
                                neglegentur. Erat diceret
                                omittam at est.
                            </p>
                        </article>
                        <hr/>
                        <article className="featuresInf">
                            <img src={SavePng} alt="Save events"/>
                            <h4>Save events</h4>
                             <p>
                            Nisl idque mel ea, <br/>
                          nominati voluptatum.
                        </p>
                        </article>
                    </article>
                    <article className="buttonsAboutSection">
                        <button className="readMoreBtn">Read more</button>
                        <hr/>
                        <p>OR</p>
                        <hr/>
                        <button className="getStartedBtn">Get started</button>
                    </article>
                </article>
            </article>
        </section>
        )
    }
}

export default Features
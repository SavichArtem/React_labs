import { Component } from "react";
import '../css/faqSection.css';
import vectorDown from '../assets/vectorDown.png';
import vectorUp from '../assets/vectorUp.png';

export class FaqSection extends Component {

    render() {
        return (
        <section className="faq_section">
            <article className="faq_content">
                <article className="faq_title">
                    <h3>CUSTOMER HELP</h3>
                    <h2>Frequently asked questions</h2>
                </article>
                <article className="questions">
                    <article className="firstQuestion">
                        <img src={vectorDown} alt="vectorDown" />
                        <h4>Reque insolens in vel?</h4>
                </article>
                <article className="secondQuestion">
                        <img src={vectorDown} alt="vectorDown" />
                        <h4>Vis rebum error graecis ea, id sit postea accusamus?</h4>
                </article>
                <article className="thirdQuestion">
                        <img src={vectorUp} alt="vectorUp" />
                        <h4 className="thirdQuestion_h4">Lorem repudiandae ne nec?</h4>
                        <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut
                             nam. Eu usu vidit tractatos, vero tractatos ius an, in mel
                              diceret persecuti.</p>
                        <button>Go to documentation</button>
                </article>
                <article className="fourthQuestion">
                        <img src={vectorDown} alt="vectorDown" />
                        <h4>Ad dicit numquam vel. Et eos iudico feugait percipitur?</h4>
                </article>
                <article className="fifthQuestion">
                        <img src={vectorDown} alt="vectorDown" />
                        <h4>Sea no dico percipitur. Fierent constituam definitiones id eum?</h4>
                </article>
                </article>
            </article>
        </section>
        )
    }
}

export default FaqSection
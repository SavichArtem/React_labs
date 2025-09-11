import { Component } from "react";
import '../css/quotesSection.css';
import avatar from '../assets/avatar.png';

export class QuotesSection extends Component {

    render() {
        return (
        <section className="quotesSection">
            <article className="quotesContentSection">
                <article className="quotesTitle">
                    <h3>TESTIMONIALS</h3>
                    <h2>Customers's quotes</h2>
                    <p>Brute laoreet efficiendi id his, ea illum nonumes <br/>
                         luptatum pro. Usu atqui laudem an.</p>
                </article>
                <article className="quotes">
                    <article className="firstQuote">
                        <article className="firstQuoteText">
                            <p>Quidam vocibus eum ne, erat consectetuer <br/>
                                voluptatibus ut nam. Eu usu vidit tractatos, <br/>
                                 vero tractatos ius an, in mel diceret <br/>
                                  persecuti.</p>
                        </article>
                        <img src={avatar} alt="firstQuoteAvatar"/>
                    </article>
                    <article className="secondQuote">
                        <p>Quidam vocibus eum ne, erat consectetuer <br/>
                             voluptatibus ut nam. Eu usu vidit tractatos, <br/>
                              vero tractatos ius an, in mel diceret <br/>
                               persecuti. </p>
                    </article>
                </article>
                <nav className="quotes_slider_nav">
                    <a href=""></a>
                    <a href=""></a>
                    <a href="" className="thirdDot"></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </nav>
            </article>
        </section>
        )
    }
}

export default QuotesSection
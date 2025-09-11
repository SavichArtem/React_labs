import { Component } from "react";
import '../css/footer.css'
import logo from '../assets/logo.png'
import facebookLogo from '../assets/Facebook_logo.svg'
import telegramLogo from '../assets/Telegram_logo.svg'
import twitterLogo from '../assets/Twitter_logo.svg'
import mLogo from '../assets/M_logo.svg'

export class Footer extends Component {

    render() {
        const { socialLinks, navItems } = this.props;

        return (
        <footer>
            <article className="footer_content">
                <img src={logo} alt="logotype" className="footer_logo"/>
                    <nav className="footer_navigation">
                        <ul>
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <a href={item.href}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="footer_socials">
                        <ul>
                            {socialLinks.map((link, index) => {
                                let iconSrc;
                                switch(link.name) {
                                    case "Facebook":
                                        iconSrc = facebookLogo;
                                        break;
                                    case "Telegram":
                                        iconSrc = telegramLogo;
                                        break;
                                    case "Twitter":
                                        iconSrc = twitterLogo;
                                        break;
                                    case "Medium":
                                        iconSrc = mLogo;
                                        break;
                                    default:
                                        iconSrc = "";
                                }
                                
                                return (
                                    <li key={index}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            <img src={iconSrc} alt={link.name}/>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                <button className="footer_btn">Get started</button>
                <button className="menuMobile_footer"></button>
                <h3>Copyright © 2018 by Random Site</h3>
            </article>
        </footer>
        )
    }
}

export default Footer
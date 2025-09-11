import { Component } from "react";
import '../css/header.css'
import logo from '../assets/logo.png'
import facebookLogo from '../assets/Facebook_logo.svg'
import telegramLogo from '../assets/Telegram_logo.svg'
import twitterLogo from '../assets/Twitter_logo.svg'
import mLogo from '../assets/M_logo.svg'

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    handleMenuToggle = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    };

    render() {
        const { isMenuOpen } = this.state;
        const { socialLinks, navItems } = this.props;

        return (
        <header className="header" id="Home">
            <img src={logo} alt="logotype" class="logo" />
            
            <nav class="navigation">
                <ul>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            
            <nav class="socials">
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
            
            <button class="btn">Get started</button>
            <button className="menuMobile" onClick={this.handleMenuToggle}></button>
        </header>
        );
    }
}

export default Header;
import { Component } from "react";
import '../css/customersSection.css'
import bitbucket from '../assets/bitbucket.svg'
import appleWatch from '../assets/apple-watch.svg'
import facebook from '../assets/facebook.svg'
import atlassian from '../assets/atlassian.svg'
import audi from '../assets/audi.svg'

export class CustomersSection extends Component {
    render() {
        return (
        <section className="customersSection">
            <nav>
                <ul>
                    <li className="firstCustomer">
                        <a href="https://bitbucket.org/product/">
                            <img src={bitbucket} alt="Bitbucket"/>
                        </a>
                    </li>
                    <li className="secondCustomer">
                        <a href="https://www.apple.com/by/watch/">
                            <img src={appleWatch} alt="Apple-watch"/>
                        </a>
                    </li>
                    <li className="thirdCustomer">
                        <a href="https://www.facebook.com/">
                            <img src={facebook} alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.atlassian.com">
                            <img src={atlassian} alt="Atlassian" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.audiusa.com/en/">
                            <img src={audi} alt="Audi"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
        )
    }
}

export default CustomersSection
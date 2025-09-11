import { Component } from "react";
import '../css/statsSection.css';
import FirstStat from '../assets/firstStat.png';
import SecondStat from '../assets/secondSection.png';

export class StatsSection extends Component {

    render() {
        return (
        <section class="stats">
            <article class="firstStatBlock">
                <article class="firstStatTextSection">
                    <img src={FirstStat} alt="firstStat"/>
                    <h4>89%</h4>
                    <p>Customers who have <br/>
                         increased their productivity</p>
                </article>
            </article>
            <article class="secondStatBlock">
                <article class="secondStatTextSection">
                    <img src={SecondStat} alt="secondStat"/>
                    <h4>3123</h4>
                    <p>Users who have used our <br/>
                     application</p>
                </article>
            </article>
        </section>
        )
    }
}

export default StatsSection
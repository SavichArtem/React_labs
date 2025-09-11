import { Component } from "react";
import '../css/newsletterSection.css';

export class NewsletterSection extends Component {

    render() {
        return (
        <section class="newsletter">
            <article class="newsletter_content">
                <article class="newsletter_text">
                    <h3>Sign up for newsletter</h3>
                    <p> Cu qui soleat partiendo urbanitas. Eum aperiri <br/>
                         indoctum eu, homero alterum.
                    </p>
                </article>
                <article class="newsletter_input">
                    <input type="email" placeholder="Email address"/>
                    <button class="saveBtn">Save me</button>
                </article>
            </article>
        </section>
        )
    }
}

export default NewsletterSection
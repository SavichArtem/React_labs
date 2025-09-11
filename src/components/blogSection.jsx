import { Component } from "react";
import '../css/blogSection.css'
import VectorL from '../assets/VectorL.png'
import VectorR from '../assets/VectorR.png'
import blogImg1 from '../assets/blogImg1.png'
import blogImg2 from '../assets/blogImg2.png'
import blogImg3 from '../assets/blogImg3.png'

export class BlogSection extends Component {

    render() {
        return (
        <section className="blog" id="Blog">
            <article className="blogTextSection">
                <h3>OUR RESOURCES</h3>
                <h2>Start reading our blog</h2>
            </article>
            <article className="arrows">
                <img src={VectorL} alt="leftArrow" />
                <img src={VectorR} alt="rightArrow" />
            </article>
            <article className="blogImage">
                <article className="imagesInBlog">
                    <button className="increaseBtn"></button>
                    <img src={blogImg1} alt="firstImage" className="firstBlogImage" />
                    <img src={blogImg2} alt="secondImage" className="secondBlogImage" />
                    <img src={blogImg3} alt="thirdImage" className="thirdBlogImage" />
                </article>
                <article className="blogText">
                    <h3>How to start planning</h3>
                    <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut <br/>
                         nam. Eu usu vidit tractatos, vero tractatos ius an, in mel <br/>
                          diceret persecuti. Natum petentium principes mei ea. Tota <br/>
                           everti periculis vis ei, quas tibique pro at, eos ut decore ...
                    </p>
                    <button className="readBtnBlog">Read now</button>
                    <p className="addClickBlog"><a href="">Add to your bookmarks</a></p>
                </article>
            </article>
            <nav className="blog_slider_nav">
                <a href="" className="firstDot"></a>
                <a href=""></a>
                <a href=""></a>
            </nav>
        </section>
        )
    }
}

export default BlogSection
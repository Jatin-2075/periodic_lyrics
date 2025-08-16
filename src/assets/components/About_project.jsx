import Bottom from './Copy_right_bottom';
import '../css/basic.css'

const About = () => {
    return(
        <div className="div_app">
            <p>About</p>
            <p>This project gives a fun twist to the traditional periodic table by making each element interactive. When a user clicks on an element, a unique sound or music snippet plays, creating an engaging way to remember it. Built with HTML, CSS, and JavaScript (or React), it’s fully responsive and smooth across devices.</p>
            <p> Features include a search bar for quick element lookup, hover effects showing atomic details, and grouping by element categories. The goal is to blend science with creativity, turning chemistry into a more enjoyable and memorable learning experience. It also demonstrates skills in API usage, event handling, and building interactive web applications.</p>
            <div>
                <div>
                    <Bottom/>
                </div>
            </div>
        </div>
    )
}
export default About;
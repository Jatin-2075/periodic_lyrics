import './css/basic.css'
import { Link } from 'react-router-dom'; 

const About = () => {
    return(
        <div className="div_app">
            <div className='top_link'>
                <p className='about'>Periodic Lyrics is a creative twist on the periodic table where song lyrics transform into chemical elements. Each character in a lyric maps to its corresponding element — showing details like symbol, atomic number, weight, and category. Instead of reading plain text, you experience music through science, making chemistry feel more interactive and fun.</p>
                <br/>
                <p className='about'>The project is built using React + Vite, styled with responsive CSS, and powered by a custom JSON dataset of elements. Deployed on Vercel, it works smoothly across devices. What started as a challenge to display elements instead of plain characters turned into an engaging way to blend music + chemistry + code into one unique experience.</p>
                <div className='about'>
                    <p>
                        © 2025 MyBroProjects. All rights reserved. | Periodic Table Lyrics
                    <br/>
                    <div><a href='mailto:jatin2372005@gmail.com'>Mail</a></div>
                        <Link to="https://www.linkedin.com/in/jatin2075?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;
import Bottom from './Copy_right_bottom';
import './css/basic.css' 

const About = () => {
    return(
        <div className="div_app">
            <div className=''>
                <p>About</p>
                <p>Periodic Lyrics is a creative twist on the periodic table where song lyrics transform into chemical elements. Each character in a lyric maps to its corresponding element — showing details like symbol, atomic number, weight, and category. Instead of reading plain text, you experience music through science, making chemistry feel more interactive and fun.</p>
                <p>The project is built using React + Vite, styled with responsive CSS, and powered by a custom JSON dataset of elements. Deployed on Vercel, it works smoothly across devices. What started as a challenge to display elements instead of plain characters turned into an engaging way to blend music + chemistry + code into one unique experience.</p>
            </div>
            <div>
                <div>
                    <Bottom/>
                </div>
            </div>
        </div>
    )
}
export default About;
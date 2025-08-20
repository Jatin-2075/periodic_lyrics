import { Link } from 'react-router-dom';
import './css/basic.css';


const Bottom = () => {
    return (
        <div className="bottom">
            <p>
                © 2025 MyBroProjects. All rights reserved. | Periodic Table Lyrics
                <br/>
                <div><a href='mailto:jatin2372005@gmail.com'>Mail</a></div>
                <Link to="https://www.linkedin.com/in/jatin2075?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</Link>
            </p>
        </div>
    )
}

export default Bottom;
import Search from "./components/Search_Bar";
import About from "./components/About_project";
import Bottom from "./components/Copy_right_bottom";
import Synced_lyrics from "./components/synced_lyrics";

import './css/basic.css'

import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <>
            <div className="div_app">
                <div className="topbutton">
                    <div><Link className="link" to='/'>About</Link></div>
                    <div><Link className="link" to='/Search_Bar'>Search</Link></div>
                    <div><Link className="Link" to='/Synced_lyrics'>Lyrics</Link></div>
                </div>
            </div>
        </>
    )
}
export default Landing;
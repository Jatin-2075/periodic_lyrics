import Search from "./components/function/Search_Bar";
import About from "./components/function/About_project";
import Synced_lyrics from "./components/function/synced_lyrics";

import './components/function/css/basic.css'

import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <>
            <div className="div_app">
                <div className="topbutton">
                    <div><Link className="link" to='/'>About</Link></div>
                    <div><Link className="link" to='/Search_Bar'>Search</Link></div>
                </div>
            </div>
        </>
    )
}
export default Landing;
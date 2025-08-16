import { useLocation } from "react-router-dom";
import '../css/basic.css'
import { useRef, useState } from "react";

const Synced_lyrics = () => {
    const [audiourl, setaudiourl] = useState(null);
    const location = useLocation();
    const lyrics = location.state?.lyrics || "no lyrics found";
    const audioref = useRef(null);

    const handlefile = (e) => {
        const file = e.target.file;
        if(file){
            const url = URL.createObjectURL(file);
            setaudiourl(url);
        }
    }

    const start = () => {
        alert("please upload file which lyrics \nin song conversation can ruin experience\nnow you can continue")
        if(audioref.current){
            audioref.current.play();
        }
    }
    return (
        <div>
            <input onChange={handlefile} type="file" accept="audio/mpeg"/>
            <p>Lyrics</p>
            {/* <pre>{lyrics}</pre> */}
            <audio ref={audioref} src={audiourl}></audio>
            <button onClick={start}>▶</button>
        </div>
    );
};

export default Synced_lyrics;
import '../css/basic.css'
import { useRef, useState } from "react";
import periodicjson from './Periodic_table/periodic_table.json'

const Synced_lyrics = ({lyrics}) => {
    const [audiourl, setaudiourl] = useState(null);
    const [lyr_lyrics, set_lyrics] = useState('');
    const audioref = useRef(null);
    // const location = useLocation();
    // const lyrics = location.state?.lyrics || "no lyrics found";

    const handlefile = (e) => {
        const file = e.target.file[0];
        if(file){
            const url = URL.createObjectURL(file);
            setaudiourl(url);
        }
    }

    const start = () => {
        set_lyrics(lyrics);
        console.log(lyrics);
        alert("please upload file which lyrics \nin song conversation can ruin experience\nnow you can continue")
        .fetch(audiourl)
        if(audioref.current){
            audioref.current.play();
        }
    }
    
    return (
        <div>
            <div><input onChange={handlefile} type="file" accept="audio/mpeg"/></div>

            <div><audio ref={audioref} src={audiourl}></audio></div>

            <div>
                <div></div>
            </div>
            
            <button onClick={start}>▶</button>
        </div>
    );
};

export default Synced_lyrics;
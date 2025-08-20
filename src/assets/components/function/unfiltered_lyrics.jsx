import { useEffect } from "react";
import { useState } from "react";

const Unfiltered = ({lyrics}) => {
    const [filetered_lyrics, setfiletered_lyrics] = useState('');

    // const lyrics = location.state?.lyrics || "no lyrics found";

    useEffect(()=>{
        setfiletered_lyrics(lyrics || "");
    }, [lyrics]);



    return (
        <div className="unfiltered">
            <p>lyrics</p>
            {filetered_lyrics.split("[").map((line, i) => line.trim() ? 
                <p key={i}>{"[" + line }</p> : null)}
        </div>
    )
}

export default Unfiltered;
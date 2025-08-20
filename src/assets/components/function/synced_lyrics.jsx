import '../css/basic.css'
import { useRef, useState } from "react";
import periodicjson from './Periodic_table/periodic_table.json'

const Synced_lyrics = ({ lyrics }) => {
  const [audiourl, setaudiourl] = useState(null);
  const audioref = useRef(null);
  const [visibleWords, setVisibleWords] = useState([]);

  const handlefile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setaudiourl(url);
    }
  };

  const start = () => {
    if (audioref.current) audioref.current.play();

    const skipChar = (el, skip) => {
      if (el === "[") return { skip: true, char: null };
      if (el === "]") return { skip: false, char: null };
      if (skip) return { skip, char: null };
      if (periodicjson[el]) return { skip, char: periodicjson[el] };
      return { skip, char: { symbol: el } };
    };

    // split lyrics to words → chars → objects
    let skip = false;
    const words = lyrics.toLowerCase().split(" ").map(word =>
      word.split("").map(el => {
        const result = skipChar(el, skip);
        skip = result.skip;
        return result.char;
      }).filter(Boolean)
    );

    let i = 0; // word index
    const showNextChunk = () => {
      const chunk = words.slice(i, i + 3); // max 3 words
      setVisibleWords([]); // clear previous

      let charIndex = 0;
      chunk.forEach(word => {
        word.forEach(char => {
          setTimeout(() => {
            setVisibleWords(prev => [...prev, char]);
          }, charIndex * 200); // each char 0.2 sec
          charIndex++;
        });
        // add small delay between words
        charIndex += 2;
      });

      i += 3;
      if (i < words.length) {
        // schedule next 3-word chunk after current chunk finishes
        setTimeout(showNextChunk, charIndex * 200 + 500);
      }
    };

    showNextChunk();
  };

  return (
    <div>
      <div>
        <input onChange={handlefile} type="file" accept="audio/mpeg" />
      </div>

      <div>
        <audio ref={audioref} src={audiourl} controls />
      </div>

      <div  className="word-line">
        {visibleWords.map((el, i) => (
          <span key={i} className="element-box">
            <div>{el.symbol}</div>
            <div>{el.atomicWeight || ""}</div>
            <div>{el.name || ""}</div>
            <div>{el.atomicNumber || ""}</div>
            <div>{el.category || ""}</div>
          </span>
        ))}
      </div>

      <button onClick={start}>▶</button>
    </div>
  );
};

export default Synced_lyrics;

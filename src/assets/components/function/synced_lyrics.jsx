import "./css/basic.css";
import { useRef, useState } from "react";
import periodicjson from "../Periodic_table/periodic_table.json";
import { Play } from "lucide-react";

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

    let skip = false;
    const words = lyrics
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word
          .split("")
          .map((el) => {
            const result = skipChar(el, skip);
            skip = result.skip;
            return result.char;
          })
          .filter((char) => char !== null)
      );

    let i = 0;
    const showNextChunk = () => {
      const chunk = words.slice(i, i + 3);
      setVisibleWords([]);

      let charIndex = 0;
      chunk.forEach((word) => {
        word.forEach((char) => {
          setTimeout(() => {
            setVisibleWords((prev) => [...prev, char]);
          }, charIndex * 200);
          charIndex++;
        });
        charIndex += 2;
      });

      i += 3;
      if (i < words.length) {
        setTimeout(showNextChunk, charIndex * 200 + 500);
      }
    };

    showNextChunk();
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-900 min-h-screen text-white">
      {/* Upload Input */}
      <label className="w-full max-w-md">
        <input
          className="file-input"
          onChange={handlefile}
          type="file"
          accept="audio/mpeg"
        />
      </label>

      {/* Audio Player */}
      <audio
        ref={audioref}
        src={audiourl}
        controls
        className="w-full max-w-md rounded-xl shadow-md"
      />

      {/* Lyrics Display */}
      <div className="flex flex-wrap justify-center gap-3 w-full max-w-3xl">
        {visibleWords.map((el, i) => (
          <span
            key={i}
            className="element-box bg-gray-800 border border-gray-600 rounded-xl p-3 text-center w-28 hover:scale-105 transition"
          >
            <div className="text-xl font-bold">{el.symbol}</div>
            <div className="text-xs text-gray-400">{el.atomicWeight || ""}</div>
            <div className="text-sm">{el.name || ""}</div>
            <div className="text-xs">{el.atomicNumber || ""}</div>
            <div className="text-xs italic">{el.category || ""}</div>
          </span>
        ))}
      </div>

      {/* Start Button */}
      <button
        onClick={start}
        className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <Play size={18} /> Start Sync
      </button>
    </div>
  );
};

export default Synced_lyrics;

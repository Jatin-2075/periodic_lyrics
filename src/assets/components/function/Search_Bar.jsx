import { useState, useEffect } from "react";
import "./css/basic.css";
import { useNavigate } from "react-router-dom";
import Synced_lyrics from "./synced_lyrics";
import Unfiltered from "./unfiltered_lyrics";

const Search = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lyrics, setlyrics] = useState('');
  const navigate = useNavigate();


  const handleSearch = () => {
    if (!input.trim()) return;
    setLoading(true);
    fetch(`https://lrclib.net/api/search?q=${(input)}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };


  const handleclick = (id) => {
    setData([]);
    setInput("")
    setLoading(true);
    fetch(`https://lrclib.net/api/get/${id}`)
    .then((res) => res.json())
    .then((lyr) => {
      const synced = lyr.syncedLyrics || "lyrics not found";
      setlyrics(lyr.syncedLyrics || "lyrics not found");
      console.log(lyr);
      setLoading(false);
      navigate( '/search_bar' ,{ state: { lyrics: synced } });
    })
  };


  return (
    <div className="search-bar">
  {/* 🔍 Search input + results */}
  <div className="search-left">
    <div className="search-input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Song Name"
      />
      <button type="button" onClick={handleSearch}>
        🔍
      </button>
    </div>

    <div className="search-results">
      {loading && <p>Loading...</p>}
      {data.map((song, index) => (
        <div key={index} className="song-item">
          <p>{song.trackName}</p>
          <button onClick={() => handleclick(song.id)}>select</button>
        </div>
      ))}
    </div>
  </div>

  {/* 🎵 Synced lyrics */}
  <div className="synced-wrapper">
    <Synced_lyrics lyrics={lyrics} />
  </div>

  {/* 📜 Unfiltered lyrics */}
  <div className="unfiltered-wrapper">
    <Unfiltered lyrics={lyrics} />
  </div>

</div>

  );
};

export default Search;

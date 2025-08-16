import { useState, useEffect } from "react";
import Bottom from "./Copy_right_bottom";
import "../css/basic.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lyrics, setlyrics] = useState("");
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
      navigate("/synced_lyrics", { state: { lyrics: synced } });
    })
  };


  return (
    <div className="div_app">
      <div>
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Song Name"
          />
          <button type="button" onClick={handleSearch}><img src="https://cdn4.iconfinder.com/data/icons/music-276/24/search_music_1_music_color_f-64.png" /></button>
          {/* <input type="file" accept="audio/mp3"/> */}
        </div>

        <div>
          {loading && <p>Loading...</p>}
          {data.map((song, index) => (
            <div key={index}>
              <p>{song.trackName}</p>
              <button onClick={() => handleclick(song.id)}>select</button>
            </div>
          ))}
        </div>

          {/* for now it is good like this */}
        {/* {lyrics && (
          <div>
            <p>{lyrics}</p>
          </div>
        )} */}
      </div>
      <Bottom />
    </div>
  );
};

export default Search;

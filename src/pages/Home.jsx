import React from "react";

import Search from "../components/Search";
import MusicCard from "../components/MusicCard";

import { useDispatch, useSelector } from "react-redux";
import { reinitialize, searchMusic } from "../store/musicSlice";

const Home = () => {
  const { musics, loading } = useSelector((state) => state.music);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(reinitialize());
    dispatch(searchMusic(e.target["query"].value));
    e.preventDefault();
  };
  return (
    <div className="flex-grow px-4 py-8 h-full flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold">Welcome</h2>
        <h4 className="text-xl mt-2">Search for any type of music</h4>
      </div>

      <Search handleSearch={handleSearch} />

      <div className="flex-grow flex-col gap-4 grid grid-cols-1 md:grid-cols-2">
        {musics.length > 0 &&
          musics.map((music) => <MusicCard key={music.id} music={music} />)}
        {loading && (
          <div
            className="radial-progress pending"
            style={{ "--value": 70, "--thickness": "8px" }}
          ></div>
        )}
        {!loading && musics.length <= 0 && <p>Nothing here</p>}
      </div>
    </div>
  );
};

export default Home;

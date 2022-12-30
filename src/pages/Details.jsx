import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Details = () => {
  const { musicId } = useParams();
  const [music, setMusic] = useState();

  useEffect(() => {
    const getDownloadLink = async () => {
      const options = {
        method: "GET",
        url: "https://soundcloud-scraper.p.rapidapi.com/v1/track/metadata",
        params: { track: musicId },
        headers: {
          "X-RapidAPI-Key":
            "62a9a53c6amshb2ad2069b69b6e1p11e5d7jsn23ac0ee0092d",
          "X-RapidAPI-Host": "soundcloud-scraper.p.rapidapi.com",
        },
      };

      const res = await axios.request(options);
      setMusic(res.data);
    };
    getDownloadLink(music);
  }, [music, musicId]);

  return (
    <div>
      {music && (
        <>
          <ReactPlayer url={music.permalink} width="100%" controls />
          <div className="flex flex-col gap-4 p-4">
            <h3 className="text-2xl font-medium">{music.title}</h3>
            <a
              target="_blank"
              rel="noreferrer"
              className="btn gap-2"
              href={music.audio[0].url}
              download={music.audio[0].url}
            >
              <FiDownload className="text-xl" />
              Download Music
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;

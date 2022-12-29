import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const MusicCard = ({ music }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl overflow-hidden">
      <div className="card-body">
        <h2 className="card-title">{music.title}</h2>
        {music.user?.name && <p>User: {music.user.name}</p>}
        <div className="card-actions justify-end">
          <Link to={`/details/${music.id}`} className="btn gap-2">
            <FiChevronLeft className="text-xl" /> More Infos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;

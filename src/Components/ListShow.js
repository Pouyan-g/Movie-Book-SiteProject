import React, { useContext } from "react";
import DataContex from "../Context/ContexManage";
import axios from "axios";
import { FcLike, FcDislike } from "react-icons/fc";
import { MdMovieCreation } from "react-icons/md";
import { FaBook, FaRegEdit } from "react-icons/fa";
import { useState } from "react";

function ListShow() {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const HoverHandler = () => {
    return <div></div>;
  };
  const { item } = useContext(DataContex);
  const rendereditem = item.map((item) => {
    return (
      <div
        key={item.id}
        className="border-2 rounded-lg border-black inline-block p-2 m-0.5"
        onMouseEnter={() => setHoveredItemId(item.id)}
        onMouseLeave={() => setHoveredItemId(null)}
      >
        {hoveredItemId === item.id ? (
          <FaRegEdit className="cursor-pointer mb-2" />
        ) : null}
        {item.moviebook === "book" ? <FaBook /> : <MdMovieCreation />}
        <h1>{item.title}</h1>
        <p>{item.situt}</p>

        {item.situt === "I Wrote it" || item.situt === "I Watched it" ? (
          item.like ? (
            <FcLike />
          ) : (
            <FcDislike />
          )
        ) : null}
      </div>
    );
  });

  return (
    <div>
      <p>Movie/Books:</p>
      {rendereditem}
    </div>
  );
}

export default ListShow;

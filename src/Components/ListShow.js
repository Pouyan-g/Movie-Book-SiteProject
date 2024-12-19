import React, { useContext, useEffect } from "react";
import DataContex from "../Context/ContexManage";
import axios from "axios";
import { FcLike, FcDislike } from "react-icons/fc";
import { MdMovieCreation, MdDeleteOutline } from "react-icons/md";
import { FaBook, FaRegEdit } from "react-icons/fa";
import { useState } from "react";

function ListShow() {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const { item, fetchitem, DeleteItem, edititem } = useContext(DataContex);
  const [editBTN, SetEditBTN] = useState(false);
  const [stateEditId, SetStateEditId] = useState();
  const [newTitle, SetNewTitle] = useState();
  const FormHandler = (event) => {
    event.preventDefault();
    SetNewTitle(event.target.value);
    console.log(stateEditId);
    edititem(stateEditId, newTitle);
    SetEditBTN(false);
  };
  const ChangeHandler = (event) => {
    SetNewTitle(event.target.value);
  };
  const rendereditem = item.map((item) => {
    return (
      <div
        key={item.id}
        className="border-2 rounded-lg border-black inline-block p-2 m-0.5"
        onMouseEnter={() => setHoveredItemId(item.id)}
        onMouseLeave={() => setHoveredItemId(null)}
      >
        {hoveredItemId === item.id ? (
          <div className="flex space-x-2">
            <FaRegEdit
              className="cursor-pointer mb-2"
              onClick={() => handleEditClick(hoveredItemId, item.title)}
            />
            <MdDeleteOutline
              className="cursor-pointer mb-2"
              onClick={() => DeleteItem(stateEditId)}
            />
          </div>
        ) : null}

        {item.moviebook === "book" ? <FaBook /> : <MdMovieCreation />}

        {editBTN && stateEditId === item.id ? (
          <form onSubmit={FormHandler}>
            <input
              type="text"
              className="border-2"
              onChange={ChangeHandler}
              value={newTitle}
            />
            <button className="border-2">save</button>
          </form>
        ) : (
          <h1>{item.title}</h1>
        )}
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

  const handleEditClick = (id, title) => {
    if (editBTN === false) {
      SetEditBTN(true);
      SetStateEditId(id);
      SetNewTitle(title);
    } else {
      SetEditBTN(false);
      SetStateEditId(null);
    }
  };

  useEffect(() => {
    fetchitem();
  }, [item]);

  return (
    <div>
      <p>Movie/Books:</p>
      {rendereditem}
    </div>
  );
}

export default ListShow;

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
    // console.log(stateEditId);
    // console.log(newTitle);

    edititem(stateEditId, newTitle);
    SetEditBTN(false);
    SetNewTitle("");
  };
  const ChangeHandler = (event) => {
    SetNewTitle(event.target.value);
  };
  const rendereditem = item.map((item) => {
    return (
      <div className="inline-flex">
        <div
          key={item.id}
          className="border-2 rounded-lg border-black p-2 flex m-0.5 max-w-sm"
          onMouseEnter={() => setHoveredItemId(item.id)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          {editBTN && stateEditId === item.id ? null : (
            <div className="flex items-center">
              <img
                src={item.ImgUrl}
                className="w-28 h-20 object-fill rounded-md"
              />
            </div>
          )}

          <div className="flex-col  ml-4  w-full">
            {hoveredItemId === item.id ? (
              <div className="flex space-x-2 justify-end  ">
                <FaRegEdit
                  className="cursor-pointer mb-2 absolute mr-5 "
                  onClick={() => handleEditClick(hoveredItemId, item.title)}
                />
                <MdDeleteOutline
                  className="cursor-pointer mb-2 absolute"
                  onClick={() => DeleteItem(hoveredItemId)}
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
              <h1 className="font-bold text-3xl ">{item.title}</h1>
            )}
            <p className="">{item.situt}</p>
            {item.situt === "I Wrote it" || item.situt === "I Watched it" ? (
              item.like ? (
                <FcLike className="" />
              ) : (
                <FcDislike className="" />
              )
            ) : null}
          </div>
        </div>
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

  return <div>{rendereditem}</div>;
}

export default ListShow;

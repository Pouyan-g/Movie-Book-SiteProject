import React, { useContext, useState } from "react";
import DropDown from "./DropDown";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import DataContex from "../Context/ContexManage";
import classNames from "classnames";
import { useEffect } from "react";

function CreatItem() {
  const [movieORbook, setmovieORbook] = useState();
  const [Done, SetDone] = useState(false);
  const [Name, SetName] = useState();
  const [sitution, setSitution] = useState();
  const [Like, SetLike] = useState();
  const [id, setId] = useState();
  const [ImgUrl, SetImgUrl] = useState(
    "https://images.hdqwalls.com/wallpapers/error-404-page-3k.jpg"
  );

  const { SOpenModal, ItemCreator } = useContext(DataContex);

  const handleSelect = (e) => {
    if (e === "I Wrote it" || e === "I Watched it") {
      //fix the bug of change radio button
      SetDone(true);
    } else {
      SetDone(false);
    }
    setSitution(e);
  };

  const SheetDis = classNames("cursor-pointer mr-3", {
    "fill-blue-200": Like === false,
  });
  const SheetLike = classNames("cursor-pointer mr-3", {
    "fill-blue-500": Like === true,
  });

  const showLikeOrDislike = () => {
    return (
      <div className="flex p-1 text-2xl">
        <AiFillLike
          className={SheetLike}
          onClick={() => {
            SetLike(true);
          }}
        />
        <AiFillDislike
          className={SheetDis}
          onClick={() => {
            SetLike(false);
          }}
        />
      </div>
    );
  };

  const ChangeHandler = (event) => {
    SetName(event.target.value);
  };
  const ChangeHandlerURL = (event) => {
    SetImgUrl(event.target.value);
  };

  const FormHandler = (event) => {
    setId(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    event.preventDefault();
    SOpenModal(false);
    ItemCreator(Name, sitution, Like, movieORbook, ImgUrl, id);
  };
  return (
    <div>
      <form onSubmit={FormHandler}>
        <label>
          <input
            type="radio"
            value="book"
            name="creatitem"
            className="m-2"
            onChange={() => setmovieORbook("book")}
          />
          {/* {SetDone(false)} */}
          book
        </label>
        <label>
          <input
            type="radio"
            value="movie"
            name="creatitem"
            className="m-2"
            onChange={() => setmovieORbook("movie")}
          />
          {/* {SetDone(false)} */}
          movie
        </label>

        <div>
          {movieORbook === "book" && (
            <div>
              <input
                type="text"
                placeholder="enter the book name"
                onChange={ChangeHandler}
                value={Name}
              />
              <DropDown book answer={handleSelect} />
              {Done && showLikeOrDislike()}
              <input
                type="text"
                placeholder="enter the book url"
                onChange={ChangeHandlerURL}
                value={ImgUrl}
              />
            </div>
          )}
        </div>
        <div>
          {movieORbook === "movie" && (
            <div>
              <input
                type="text"
                placeholder="enter the movie name"
                onChange={ChangeHandler}
                value={Name}
              />

              <DropDown movie answer={handleSelect} />
              {Done && showLikeOrDislike()}
              <input
                type="text"
                placeholder="enter the movie url"
                onChange={ChangeHandlerURL}
                value={ImgUrl}
              />
            </div>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreatItem;

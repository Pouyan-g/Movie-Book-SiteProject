import React, { useContext, useState } from "react";
import DropDown from "./DropDown";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import DataContex from "../Context/ContexManage";

function CreatItem() {
  const [movieORbook, setmovieORbook] = useState();
  const [Done, SetDone] = useState(false);
  const [Name, SetName] = useState("");
  const [sitution, setSitution] = useState("");

  const { SetTitle, SetTitu, SOpenModal } = useContext(DataContex);

  const handleSelect = (e) => {
    if (e === "I Wrote it" || e === "I Watched it") {
      //fix the bug of change radio button
      SetDone(true);
    } else {
      SetDone(false);
    }
    setSitution(e);
  };

  const showLikeOrDislike = () => {
    return (
      <div>
        <AiFillLike />
        <AiFillDislike />
      </div>
    );
  };

  const ChangeHandler = (event) => {
    SetName(event.target.value);
  };

  const FormHandler = (event) => {
    event.preventDefault();
    SetTitle(Name);
    SetTitu(sitution);
    SOpenModal(false);
  };

  const SubmitBTN_Handler = () => {};
  return (
    <div>
      <form onSubmit={FormHandler}>
        <label>
          <input
            type="radio"
            value="book"
            name="creatitem"
            className="m-2"
            // checked={true}
            onChange={() => setmovieORbook("book")}
          />
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
            </div>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreatItem;

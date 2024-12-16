import React, { useState } from "react";
import DropDown from "./DropDown";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

function CreatItem() {
  const [movieORbook, setmovieORbook] = useState();
  const [Done, SetDone] = useState(false);

  const handleSelect = (e) => {
    if (e === "I Wrote it" || e === "I Watched it") {
      //fix the bug of change radio button
      SetDone(true);
    } else {
      SetDone(false);
    }
    console.log(Done);
  };

  const showLikeOrDislike = () => {
    return (
      <div>
        <AiFillLike />
        <AiFillDislike />
      </div>
    );
  };
  return (
    <div>
      <form>
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
              <input type="text" placeholder="enter the name" />
              <DropDown book answer={handleSelect} />
              {Done && showLikeOrDislike()}
            </div>
          )}
        </div>
        <div>
          {movieORbook === "movie" && (
            <div>
              <input type="text" placeholder="enter the name" />
              <DropDown movie answer={handleSelect} />
              {Done && showLikeOrDislike()}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreatItem;

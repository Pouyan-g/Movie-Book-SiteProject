import React, { useState } from "react";
import classNames from "classnames";

function DropDown({ book, movie, answer }) {
  const [open, setOpen] = useState(false);
  const [ValueRN, setValue] = useState("choose one");

  const databook = [
    { label: "I Wrote it" },
    { label: "Im reading it" },
    { label: "I want to read it" },
  ];
  const datamovie = [
    { label: "I Watched it" },
    { label: "I want to watch it" },
  ];

  const RenderedBook = databook.map((book) => {
    return (
      <div className="cursor-pointer" onClick={() => ClickHandler(book.label)}>
        {book.label}
      </div>
    );
  });
  const RenderedMovie = datamovie.map((movie) => {
    return (
      <div className="cursor-pointer" onClick={() => ClickHandler(movie.label)}>
        {movie.label}
      </div>
    );
  });

  const ClickHandler = (val) => {
    setValue(val);
    setOpen(false);
    answer(val);
  };
  //   const
  return (
    <div>
      <p onClick={() => setOpen(true)} className="cursor-pointer">
        {ValueRN}
      </p>
      {open && (book ? RenderedBook : RenderedMovie)}
    </div>
  );
}

export default DropDown;

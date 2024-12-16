import React, { useContext } from "react";
import DataContex from "../Context/ContexManage";
import axios from "axios";

function ListShow() {
  const { Situ, title } = useContext(DataContex);

  return (
    <div>
      <p>Movie/Books:</p>
      <h1>{title}</h1>
      <p>{Situ}</p>
    </div>
  );
}

export default ListShow;

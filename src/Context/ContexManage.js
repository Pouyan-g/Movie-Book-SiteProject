import axios from "axios";
import React, { useState, createContext } from "react";

const DataContex = createContext();
const Provider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [OpenModal, SOpenModal] = useState(false);
  const [id, setId] = useState(0);

  const CreatHandler = async () => {
    const resp = await axios.post("");
  };

  const ItemCreator = (title, sitution, Like, moviebook) => {
    setItem([
      ...item,
      {
        id: id,
        title: title,
        situt: sitution,
        like: Like,
        moviebook: moviebook,
      },
    ]);
    setId(id + 1);
  };

  const valurToShare = {
    OpenModal,
    SOpenModal,
    ItemCreator,
    item,
  };
  return (
    <DataContex.Provider value={valurToShare}>{children}</DataContex.Provider>
  );
};
export { Provider };
export default DataContex;

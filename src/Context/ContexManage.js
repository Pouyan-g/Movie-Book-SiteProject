import axios from "axios";
import React, { useState, createContext } from "react";

const DataContex = createContext();

const Provider = ({ children }) => {
  const [title, SetTitle] = useState([]);
  const [Situ, SetTitu] = useState([]);
  const [OpenModal, SOpenModal] = useState(false);

  const CreatHandler = async () => {
    const resp = await axios.post("");
  };

  const valurToShare = {
    title,
    SetTitle,
    Situ,
    SetTitu,
    OpenModal,
    SOpenModal,
  };
  return (
    <DataContex.Provider value={valurToShare}>{children}</DataContex.Provider>
  );
};
export { Provider };
export default DataContex;

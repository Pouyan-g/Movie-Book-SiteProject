import axios from "axios";
import React, { useState, createContext } from "react";

const DataContex = createContext();
const Provider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [OpenModal, SOpenModal] = useState(false);
  // const [id, setId] = useState();

  const ItemCreator = async (title, sitution, Like, moviebook, ImgUrl, id) => {
    const resp = await axios.post("http://localhost:3001/item", {
      id: id,
      title: title,
      situt: sitution,
      like: Like,
      moviebook: moviebook,
      ImgUrl: ImgUrl,
    });
    setItem([...item, resp.data]);
  };

  const DeleteItem = async (id) => {
    const rep = await axios.delete(`http://localhost:3001/item/${id}`);
    const respDelete = item.filter((_item) => {
      return _item.id !== id;
    });
    setItem(respDelete);
  };

  const fetchitem = async () => {
    const resp = await axios.get("http://localhost:3001/item");
    setItem(resp.data);
  };

  const edititem = async (id, newtitle) => {
    const resp = await axios.put(
      `http://localhost:3001/item/${id}`,
      {
        title: newtitle,
      },
      ...item
    );
    const update = item.map((_item) => {
      if (_item.id === id) {
        return { item, ...resp.data };
      }

      return _item;
    });
    setItem(update);
    // console.log(update);
  };

  const valurToShare = {
    OpenModal,
    SOpenModal,
    ItemCreator,
    item,
    fetchitem,
    DeleteItem,
    edititem,
  };
  return (
    <DataContex.Provider value={valurToShare}>{children}</DataContex.Provider>
  );
};
export { Provider };
export default DataContex;

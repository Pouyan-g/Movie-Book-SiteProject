import { useContext, useState } from "react";
import Modal from "./Components/Modal";
import ListShow from "./Components/ListShow";
import DataContex from "./Context/ContexManage";

function ListPage() {
  const { OpenModal, SOpenModal } = useContext(DataContex);

  return (
    <div>
      <ListShow />
      <div>
        <button onClick={() => SOpenModal(true)}>Make a new array</button>
      </div>
      {OpenModal && <Modal />}
    </div>
  );
}

export default ListPage;

import { useContext, useState } from "react";
import Modal from "./Components/Modal";
import ListShow from "./Components/ListShow";
import DataContex from "./Context/ContexManage";
import { FaPen } from "react-icons/fa";
function ListPage() {
  const { OpenModal, SOpenModal } = useContext(DataContex);

  return (
    <div className="">
      <div class="relative mx-auto">
        <img
          src="https://wallpapers.com/images/featured/aesthetic-city-7gtkewcj8dcnv0x2.jpg"
          className="w-full h-40 object-bottom mb-2 object-cover"
        />
        <p className="text-7xl m-4 absolute font-bold text-white flex items-center justify-center inset-0 font-Bebas">
          Movie / Books :
        </p>
      </div>
      <div className="flex gap-10 pb-2 justify-center justify-items-center">
        <p className="">Filters1</p>
        <p>Filters2</p>
        <p>Filters3</p>
      </div>
      <div className="inline-flex">
        <ListShow />
      </div>
      <div className="absolute bottom-4 right-4">
        <button
          className="bg-red-500 rounded-full p-4 text-4xl"
          onClick={() => SOpenModal(true)}
        >
          <FaPen />
        </button>
      </div>
      {OpenModal && <Modal />}
    </div>
  );
}

export default ListPage;

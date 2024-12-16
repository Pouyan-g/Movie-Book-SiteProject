import { useState } from "react";
import Modal from "./Components/Modal";
import DropDown from "./Components/DropDown";

function ListPage() {
  const [open, setOpen] = useState(false);
  const ModalHandler = () => {
    setOpen(true);
  };
  return (
    <div>
      <div>
        <button onClick={ModalHandler}>Make a new array</button>
      </div>
      {open && <Modal />}
    </div>
  );
}

export default ListPage;

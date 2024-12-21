import CreatItem from "./CreatItem";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-90 "></div>
      <div className="bg-red-400 fixed m-auto p-10 rounded-3xl">
        <CreatItem />
      </div>
    </div>,
    document.querySelector(".modall-container")
  );
}

export default Modal;

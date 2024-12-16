import CreatItem from "./CreatItem";

function Modal() {
  return (
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-90 "></div>
      <div className="bg-red-400 fixed m-auto p-10 rounded-3xl">
        <CreatItem />
      </div>
    </div>
  );
}

export default Modal;

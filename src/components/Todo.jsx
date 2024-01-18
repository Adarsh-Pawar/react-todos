import React, { useState } from "react";
import "../index.css"
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {

const [isModalOpen, setModalOpen] = useState(false);
  
function handleDeleteButton() {
  setModalOpen(true);
}

function handleCloseModal() {
  setModalOpen(false);
}

const handleDelete = () => {
  props.onDelete();
  setModalOpen(false);
}

  if(props.title.trim() !== "")
  {

  
  return (
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDeleteButton}>Delete</button>
        </div>
        {isModalOpen && <Modal onCancel={handleCloseModal}  onConfirm={handleDelete}/>}
        {isModalOpen && <Backdrop onCancel={handleCloseModal}/>}
      </div>
  );
}
};

export default Todo;

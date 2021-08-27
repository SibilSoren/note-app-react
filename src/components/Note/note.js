import React from "react";
import "./note.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Note = ({ title, content, deleteHandler, id }) => {
  return (
    <div className="container noteWrapper col-3 m-4">
      <h3 className="text-break">{title}</h3>
      <p className="text-break">{content}</p>
      <div className="menuBar d-flex justify-content-end">
        <button className="myButton edit d-flex justify-content-center align-items-center m-2">
          <EditIcon />
        </button>
        <button
          onClick={() => deleteHandler(id)}
          className="myButton del d-flex justify-content-center align-items-center m-2"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Note;

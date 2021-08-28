import React, { useState } from "react";
import "./note.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import EditModal from "../Modal/Modal";

const Note = ({ title, content, deleteHandler, id, edit }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="container noteWrapper col-8 col-md-3  m-4">
      <h3 className="text-break">{title}</h3>
      <p className="text-break">{content}</p>
      <div className="menuBar d-flex justify-content-end">
        <button
          onClick={() => {
            setModalShow(true);

            console.log(id);
          }}
          className="myButton edit d-flex justify-content-center align-items-center m-2"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => deleteHandler(id)}
          className="myButton del d-flex justify-content-center align-items-center m-2"
        >
          <DeleteIcon />
        </button>
      </div>
      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        notetitle={title}
        notecontent={content}
        noteid={id}
        edit={edit}
      />
    </div>
  );
};

export default Note;

import React from "react";
import "./NoteItem.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const NoteItem = () => {
  const content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
    consectetur animi quisquam molestiae in dolor a architecto, ipsum,
    maxime aperiam quo ea nesciunt asperiores? Quos libero cumque id tempora
    molestias?`;
  return (
    <div className="noteWrapper col-3">
      <h3>Title</h3>
      <p>{content}</p>
      <div className="menuBar d-flex justify-content-end">
        <button className="myButton edit d-flex justify-content-center align-items-center m-2">
          <EditIcon />
        </button>
        <button className="myButton del d-flex justify-content-center align-items-center m-2">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;

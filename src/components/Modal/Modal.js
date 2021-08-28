import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import "./modal.css";
const EditModal = (props) => {
  const [newnoteTitle, setNewNoteTitle] = useState(props.notetitle);
  const [newnoteContent, setNewNoteContent] = useState(props.notecontent);
  const [newNoteId, setNewNoteId] = useState(props.noteid);
  const inputHandlerTitle = (e) => {
    setNewNoteTitle(e.target.value);
    console.log(newnoteTitle);
  };
  const inputHandlerContent = (e) => {
    setNewNoteContent(e.target.value);
    console.log(newnoteContent);
  };

  const updateValues = (noteId, noteTitle, noteContent) => {
    console.log(props.id);
    console.log(noteId, noteTitle, noteContent);
    props.edit(noteId, noteTitle, noteContent);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={newnoteTitle}
          onChange={inputHandlerTitle}
          className="col-12 updateInput"
        />
        <TextareaAutosize
          onChange={inputHandlerContent}
          minRows="2"
          value={newnoteContent}
          className="inputTextArea d-block  px-2 mt-1"
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            setNewNoteId(props.noteid);
            updateValues(newNoteId, newnoteTitle, newnoteContent);
            props.onHide();
          }}
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;

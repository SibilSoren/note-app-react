import { Modal, Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import "./modal.css";
const EditModal = (props) => {
  let newTitle = "";
  let newContent = "";

  // console.log(prevTitle);
  const inputHandlerTitle = (e) => {
    newTitle = e.target.value;

    // console.log(newTitle);
  };
  const inputHandlerContent = (e) => {
    newContent = e.target.value;
    // console.log(newContent);
  };

  const updateValues = (noteId, noteTitle, noteContent) => {
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
          // value={newTitle}
          placeholder={props.notetitle}
          onChange={inputHandlerTitle}
          className="col-12 updateInput"
        />
        <TextareaAutosize
          onChange={inputHandlerContent}
          minRows="2"
          placeholder={props.notecontent}
          // value={props.noteContent}
          className="inputTextArea d-block  px-2 mt-1"
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            updateValues(props.noteid, newTitle, newContent);
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

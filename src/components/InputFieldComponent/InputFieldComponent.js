import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./InputFieldStyle.css";

const InputField = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <form action="/" className="inputWrapper d-block p-2">
        <input
          onChange={props.onChangeTitle}
          value={props.titleValue}
          type="text"
          placeholder="Title"
          className="inputField d-block px-2 col-12"
          required
        />
        <TextareaAutosize
          onChange={props.onChangeNote}
          minRows="2"
          value={props.noteValue}
          placeholder="Take notes"
          className="inputTextArea d-block  px-2 mt-1"
          required
        />
        <div className="buttonComp d-flex justify-content-end mt-2">
          <button
            onClick={props.onSubmit}
            type="submit"
            className="subButton col-2 d-flex justify-content-center align-items-center"
          >
            <p>+</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputField;

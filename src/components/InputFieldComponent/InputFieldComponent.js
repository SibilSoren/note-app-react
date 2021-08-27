import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./InputFieldStyle.css";

function InputField() {
  return (
    <div className="d-flex justify-content-center">
      <form action="/" className="inputWrapper d-block p-2">
        <input
          type="text"
          placeholder="Title"
          className="inputField d-block px-2"
        />
        <TextareaAutosize
          minRows="2"
          placeholder="Take a notes"
          className="inputTextArea d-block  px-2"
        />
        <div className="buttonComp d-flex justify-content-end mt-2">
          <button
            type="submit"
            className="subButton col-2 d-flex justify-content-center align-items-center"
          >
            <p>+</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputField;

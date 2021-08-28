import "./App.css";
import { useState, useEffect } from "react";
import InputField from "./components/InputFieldComponent/InputFieldComponent";
import NoteList from "./components/NoteList/NoteList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const App = () => {
  const notifySucess = () =>
    toast.success("Note Added!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
  const notifyDelete = () =>
    toast.success("Note deleted", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });

  const notifyWarning = () =>
    toast.warning("Fields cannot be empty", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });

  const notifyUpdate = () =>
    toast.success("Note updated sucessfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });

  const [noteList, setNoteList] = useState(() => {
    const localData = localStorage.getItem("notes");
    return localData ? JSON.parse(localData) : [];
  });
  const [titleInput, setTitleInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [id, setId] = useState(0);
  const [random, setRandom] = useState(0);

  const inputHandlerTitle = (e) => {
    setTitleInput(e.target.value);
  };
  const inputHandlerNote = (e) => {
    setNoteInput(e.target.value);
  };

  const deleteHandler = (id) => {
    console.log("Delete Handler!");
    let newNoteList = noteList.filter((note) => {
      return note.id !== id;
    });
    setNoteList(newNoteList);
    notifyDelete();
  };

  const addNote = (e) => {
    e.preventDefault();
    // let count = 0;
    let noteObj = {
      id: id,
      title: titleInput,
      content: noteInput,
    };

    if (titleInput.length === 0 || noteInput.length === 0) {
      notifyWarning();
    } else {
      noteList.push(noteObj);
      notifySucess();
      console.log(id);
      setTitleInput("");
      setNoteInput("");
      setId(id + 1);
    }

    console.log(noteList);
  };

  const editHandler = (noteId, noteTitle, noteContent, e) => {
    noteList[noteId].title = noteTitle;
    noteList[noteId].content = noteContent;
    setRandom(random + 1);
    setNoteList(noteList);
    notifyUpdate();
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteList));
  });

  return (
    <div>
      <div className="container d-flex justify-content-center main-wrapper p-4">
        <div className="wrapper">
          <header>
            <h2>Notes App</h2>
            <p className="text-center">Your daily need...</p>
          </header>
          <InputField
            onChangeTitle={inputHandlerTitle}
            onChangeNote={inputHandlerNote}
            titleValue={titleInput}
            noteValue={noteInput}
            onSubmit={addNote}
          ></InputField>
          <NoteList
            notes={noteList}
            deleteButt={deleteHandler}
            edit={editHandler}
          ></NoteList>
        </div>
      </div>
      <div className="myFooter text-center p-3">
        Made with ❤️ by Sibil Sarjam Soren
      </div>
    </div>
  );
};

export default App;

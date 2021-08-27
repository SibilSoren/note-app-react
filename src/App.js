import "./App.css";
import InputField from "./components/InputFieldComponent/InputFieldComponent";
function App() {
  return (
    <div className="container d-flex justify-content-center main-wrapper p-4">
      <div className="wrapper">
        <header>
          <h2>Notes App</h2>
          <p className="text-center">Your daily need...</p>
        </header>
        <InputField></InputField>
      </div>
    </div>
  );
}

export default App;

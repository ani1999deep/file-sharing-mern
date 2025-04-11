import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const uploadRef = useRef();

  const handleUpload = () => {
    uploadRef.current.click();
  };
  console.log("====>", file);
  return (
    <div className="container">
      <h1>File Sharing App</h1>

      <div>
        <button
          onClick={() => {
            handleUpload();
          }}
        >
          Upload
        </button>
        <input
          type="file"
          ref={uploadRef}
          style={{ display: "none" }}
          onChange={(event) => setFile(event.target.files[0])}
        />
      </div>
    </div>
  );
}

export default App;

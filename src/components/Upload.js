import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Upload.css";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const onFileSelect = (e) => {
    if ([...e.target.files].length > 9) {
      // 10 files max
      document.getElementById("multifile").value = "";
      setFiles([]); //  delete added files
      setError("You can't add more than 10 files at once!");
      return;
    } else {
      const filesArray = [...e.target.files];
      filesArray.forEach((item, i) => {
        // create id for each file
        item.id = i;
      });
      const notValid = filesArray.filter((file) => {
        // check if they are all mp3
        return !file.name.endsWith(".mp3");
      });
      if (notValid[0]) {
        document.getElementById("multifile").value = "";
        setError("All files must be mp3");
      } else {
        setError("");
        setFiles([...e.target.files]);
      }
    }
  };

  const onFilesDelete = () => {
    document.getElementById("multifile").value = "";
    setFiles([]);
  };

  const renderSelectedFiles = () => {
    if (!files) return;
    return files.map((file, i) => {
      return (
        <h5 key={file.lastModified}>
          {i + 1}. {file.name}
        </h5>
      );
    });
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{ textAlign: "center", fontSize: "3.5rem", marginTop: "50px" }}
      >
        Upload your files
      </h2>
      <h5 style={{ color: "var(--color-secondary)" }}>10 files max</h5>

      {error ? (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}

      <div className="container">
        <div
          className="row"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="col-lg-6">
            <div className="form-group files">
              <input
                id="multifile"
                onChange={onFileSelect}
                type="file"
                className="form-control"
                multiple
              />
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: "center", fontSize: "3.5rem", marginTop: "" }}>
        Review them
      </h2>
      <br />
      <div className="container">
        <div
          className="row"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="col-lg-6">
            <div className="form-control">
              <h3 style={{ borderBottom: "1px solid grey" }}>
                Selected Files:
              </h3>
              {renderSelectedFiles()}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "15px 0",
        }}
      >
        <button
          style={{ margin: "15px" }}
          className="btn btn-danger btn-lg"
          onClick={onFilesDelete}
        >
          Delete files
        </button>
        {files[0] ? (
          <Link
            to={{
              pathname: "/upload/results",
              state: {
                files: files,
              },
            }}
            className="btn btn-info btn-lg"
            style={{ margin: "15px" }}
          >
            Transcribe
          </Link>
        ) : (
          <button
            className="btn btn-info btn-lg"
            onClick={() => setError("You must add at least one file")}
            style={{ margin: "15px" }}
          >
            Transcribe
          </button>
        )}
      </div>
    </div>
  );
};

export default Upload;

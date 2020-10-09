import React, { useState, useEffect } from "react";
import "./Results.css";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Modal from "./Modal";

const Results = ({ location, history }) => {
  const [files] = useState(location.state.files); // props passed through Link component in Upload.js
  const [results, setResults] = useState([]);
  const [response, setResponse] = useState({}); // why use this state? to fix some async issues
  const [displayModal, setDisplayStatus] = useState(false);
  console.log(files, results);

  useEffect(() => getResponse(), []);

  useEffect(() => setResults([...results, response]), [response]);
  // it's like a bridge between the response and the results array
  // I did it to fix some crazy async bugs

  const getResponse = () => {
    if (!files) {
      history.push("/upload");
    } else {
      Promise.all(
        files.map(async (file, i) => {
          file.id = i; // set id
          const formData = new FormData();
          formData.append("audio", file);
          const response = await axios.post(
            "http://18.219.108.220:5000/transcribe",
            formData,
            {
              timeout: 600000,
            }
          ); // 10 minutes timeout
          if (response.status === 200 && response.data.success) {
            setResponse({
              url: response.data.url,
              name: file.name,
              id: file.id,
            });
          } else {
            setResponse({
              id: file.id,
              error:
                "An error occured while processing your file. Try again later.",
            });
          }
        })
      );
    }
  };

  const renderResultOptions = (found) => {
    if (!found[0]) {
      return (
        <div>
          <div class="ui active inline loader"></div>
        </div>
      );
    } else if (found[0] && found[0].url && !found[0].error) {
      return (
        <div>
          <i style={{ width: "1.5rem" }} className="fa fa-check" />
          <a href={found[0].url}>Download</a>
        </div>
      );
    } else if (found[0].error) {
      return (
        <i className="exclamation icon">
          <span class="tooltiptext">{found[0].error}</span>
        </i>
      );
    } else {
      return (
        <div class="tooltip">
          <i style={{ width: "1.5rem" }} className="fa fa-question" />
          <span class="tooltiptext">Unknown error occured</span>
        </div>
      );
    }
  };

  const renderItems = () => {
    return files.map((file) => {
      const found = results.filter((result) => {
        // const found determines if the file has been uploaded successfully
        return result.id === file.id;
      });
      return (
        <div
          key={file.id}
          className="form-control"
          style={{ marginBottom: "10px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ maxWidth: "70%" }}>{file.name}</h4>
            {renderResultOptions(found)}
          </div>
        </div>
      );
    });
  };

  const renderResults = () => {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3.5rem",
            marginTop: "50px",
          }}
        >
          Monitor Results
        </h2>
        <h5 style={{ color: "var(--color-secondary)" }}>
          This might take a while.
        </h5>
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
            <div className="col-md-6 ">{renderItems()}</div>
          </div>
        </div>
        <br />
        <button
          onClick={() => setDisplayStatus(true)}
          className="btn btn-info btn-lg"
        >
          Transcribe more files...
        </button>
        {displayModal ? (
          <Modal
            setModal={setDisplayStatus}
            onConfirm={() => history.push("/upload")}
            title="Are you sure?"
            message="To transcribe more files you must leave this page. This results will be lost forever."
          />
        ) : null}
      </div>
    );
  };
  return renderResults();
};

export default withRouter(Results);

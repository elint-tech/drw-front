import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onConfirm, setModal, title, message }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div
        style={{ margin: "auto", padding: "20px", height: "60%" }}
        className="ui standard modal visible active"
      >
        <div className="header">
          <h1>{title}</h1>
        </div>
        <div className="content">
          <h2>{message}</h2>
        </div>
        <div className="actions">
          <div>
            <button className="btn btn-danger btn-lg" onClick={onConfirm}>
              Confirm
            </button>
            <button
              className="btn btn-light btn-lg"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

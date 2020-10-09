import React from "react";

export default () => {
  return (
    <div style={{ margin: "0px 40px" }}>
      <h1 style={{ fontSize: "50px " }}>How does it work?</h1>
      <br />
      <h2 style={{ marginLeft: "5px", maxWidth: "80%", lineHeight: "50px" }}>
        We use{" "}
        <strong style={{ color: "var(--color-secondary)", fontSize: "32px" }}>
          machine learning
        </strong>{" "}
        to convert audio data into text, being able to distinguish between which
        individuals are speaking and what they're saying as the conversation
        goes on.
      </h2>
      <br />
      <br />
    </div>
  );
};

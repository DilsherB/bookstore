import React from "react";

const BookAction = () => {
  const actionBtns = ["Comments", "Remove", "Edit"];
  return (
    <div className="d-flex flex-row">
      {actionBtns.map((btn) => {
        return (
          <div key={btn}>
            <p className="text-primary fw-light" style={{ cursor: "pointer" }}>
              {btn}
              <div className="vr mx-3" />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BookAction;

import React from "react";

const BookProgress = () => {
  return (
    <div className="d-flex gap-5 h-100 align-items-center">
      <div className="d-flex h-100 align-items-center gap-3">
        <div className="border border-3 p-5 rounded-circle" />
        <div>
          <p>
            64%
            <br />
            Complete
          </p>
        </div>
      </div>
      <div className="vr" />
      <div>
        <p className="text-secondary fs-6">CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="submit" className="btn btn-primary">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default BookProgress;

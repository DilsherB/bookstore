import React from "react";

const NewBookForm = () => {
  return (
    <div>
      <p className="fs-4 text-secondary">ADD NEW BOOK</p>
      <form>
        <div className="d-flex justify-content-between mediaQueryNewBookForm">
          <div className="form-group col-6 flex-row">
            <input
              type="text"
              className="form-control"
              placeholder="Book title"
            />
          </div>
          <div className="form-group col-3 flex-row">
            <select
              name="category"
              id="category"
              className="form-select form-control"
            >
              <option value="Action">Action</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
          <div className="form-group col-2 col-sm-3 d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary form-control"
              style={{ width: "max-content" }}
            >
              ADD BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBookForm;

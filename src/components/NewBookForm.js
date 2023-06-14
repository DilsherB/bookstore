import React from "react";

const NewBookForm = () => {
  return (
    <div>
      <p className="fs-4 text-secondary">ADD NEW BOOK</p>
      <form>
        <div className="d-flex justify-content-between mediaQueryNewBookForm pb-5">
          <div className="form-group col-3 flex-row">
            <input
              type="text"
              className="form-control"
              placeholder="Book title"
            />
          </div>
          <div className="form-group col-3 flex-row">
            <input type="text" className="form-control" placeholder="Author" />
          </div>
          <div className="form-group col-3 flex-row">
            <select
              name="category"
              id="category"
              className="form-select form-control"
            >
              <optgroup label="Category">
                <option value="Action">Action</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Economy">Economy</option>
              </optgroup>
            </select>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary form-control"
              style={{ minWidth: "max-content" }}
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

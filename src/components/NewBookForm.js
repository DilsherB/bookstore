import React from "react";

const NewBookForm = () => {
  return (
    <div>
      <p className="fs-4 text-secondary">ADD NEW BOOK</p>
      <form>
        <div className="d-flex justify-content-between">
          <div className="form-group col-6 flex-row">
            <input type="text" className="form-control" placeholder="Book title" />
          </div>
          <div className="form-group col-3 flex-row">
            <option>
              <select
                name="category"
                id="category"
                className="form-select form-control"
              >
                <option value="Action">Action</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Economy">Economy</option>
              </select>
            </option>
          </div>
          <div className="form-group col-2 col-sm-3">
            <p className="btn btn-primary form-control">ADD BOOK</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBookForm;

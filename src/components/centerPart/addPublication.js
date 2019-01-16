import React from "react";

class AddPublication extends React.Component {

  render(){
    return (
        <div className="card">
          <div className="card-header">
            <a href="fff.com" className="">Add publication</a>
          </div>
          <div className="card-body">
            <textarea class="form-control" id="addPublication" rows="3" maxLength="255"></textarea>
          </div>
          <div class="card-footer text-muted">
            <a href="fff.com" class="btn btn-primary">Add</a>
          </div>
        </div>
    )
  };
};

export default AddPublication;
import React from "react";

class Messages extends React.Component {
  render (){
    return (
      <div className="col-9"> 
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a className="nav-link active" href="fdsadf">Active</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="dsad">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="dasd">Disabled</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <textarea className="w-100" rows="15" columns="15"></textarea>
            
            <a href="#dasd" className="btn btn-primary">Send</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Messages;
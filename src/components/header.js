import React from "react";
import Modal from "./modal"

class Header extends React.Component {


  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-primary position-fixed fixed-top justify-content-between">
        
          
          <div className="input-group w-50">
            <a className="navbar-brand" href="fff.com">Logo</a>
            <input type="text" className="form-control" placeholder="Search..." maxLength="255" aria-label="type to search" aria-describedby="type to search"/>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">Search</button>
            </div>
          </div>
        
        <div className="d-flex">
          <button type="button" className="btn btn-primary mx-2">{this.props.name}</button>
          <button type="button" className="btn btn-primary mr-2">Home</button>
          <Modal />
        </div>
      </nav>
    )
  }
}

export default Header;
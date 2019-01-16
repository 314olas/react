import React from "react";

class News extends React.Component {

  render(){
    return(
      <div className="card mt-3 align-items-center">
        <img className="card-img-top mx-2 w-50 " src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/2000_Memorial_Cup.JPG/200px-2000_Memorial_Cup.JPG" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">New's title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="dsfsd" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default News;
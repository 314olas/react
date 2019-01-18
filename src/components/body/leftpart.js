import React from "react";
import {Link} from "react-router-dom";

class LeftPart extends React.Component {
  render(){
    return (
        <div className="col-3">
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="Friends">
              <div className="mb-0 d-flex">
                <Link to="/friends" className="btn btn-link text-dark" data-toggle="collapse" data-target="#Friends" aria-expanded="true" aria-controls="Friends">
                  Friends 
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="Messages">
              <div className="mb-0 d-flex">
                <Link to="/Messages" className="btn btn-link text-dark" data-toggle="collapse" data-target="#Messages" aria-expanded="true" aria-controls="Messages">
                  Messages 
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="Games">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#Games" aria-expanded="false" aria-controls="Games">
                  My games
                </button>
              </h5>
            </div>
            <div id="Friends" class="collapse show" aria-labelledby="Games" data-parent="#accordion">
              <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><Link to="/My-games/tetris" className="btn btn-link">Tetris</Link></li>
                    <li class="list-group-item"><Link to="/My-games/mario" className="btn btn-link">Mario</Link></li>
                    <li class="list-group-item"><Link to="/My-games/Counter-Strike" className="btn btn-link">Counter Strike</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="Interesting">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#Interesting" aria-expanded="false" aria-controls="Interesting">
                  Interesting
                </button>
              </h5>
            </div>
            <div id="Friends" class="collapse show" aria-labelledby="Games" data-parent="#accordion">
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><button className="btn btn-link"> Events</button></li>
                  <li class="list-group-item"><button className="btn btn-link"> Pages</button></li>
                  <li class="list-group-item"><button className="btn btn-link"> Groups</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default LeftPart;
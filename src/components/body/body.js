import React from "react";
import LeftPart from "./leftpart";
import CenterPart from "./centerPart";

class Body extends React.Component {

  render(){
    return (
      <main>
        <div className="container">
          <div className="row">
            <LeftPart />
            <CenterPart />
          </div>
      </div>
      </main>
    )
  };
};

export default Body;
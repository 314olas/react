import React from "react";
import AddPublication from "../centerPart/addPublication";
import News from "../centerPart/news";

class CenterPart extends React.Component {

  render(){
    return(
      <div className="col-9">
        <AddPublication />
        <News />
      </div>
    )
  }
}

export default CenterPart;
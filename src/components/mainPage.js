import React from "react";
import Header from "./header";
import Body from "./body/body"

class MainPage extends React.Component {

  render(){
    return ([
      <Header name={this.props.name}/>,
      <Body />
    ])
  }
};

export default MainPage;
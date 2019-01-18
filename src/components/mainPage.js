import React from "react";
import Header from "./header";
import Body from "./body/body"
//import {BrowserRouter } from "react-router-dom";


class MainPage extends React.Component {

  render(){
    return (
        <React.Fragment>
          <Header name={this.props.name}/>,
          <main>
            <div className="container">
              
              <Body />
              
            </div>
          </main>
        </React.Fragment>
      
    )
  }
};

export default MainPage;
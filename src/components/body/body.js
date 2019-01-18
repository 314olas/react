import React from "react";
import LeftPart from "./leftpart";
import CenterPart from "./centerPart";
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom";
import Friends from "../centerPart/Friends";
import Messages from "../centerPart/Messages";

class Body extends React.Component {

  render(){
    return (       
            <Router>
              <div className="row">
                <LeftPart />
                <Switch>
                  
                  <Route exact path="/" component={CenterPart} /> 
                  <Route  path="/friends" component={Friends} /> 
                  <Route  path="/messages" component={Messages} />
                  <Route  component={() => <h1>Path does not exist</h1>} />

                </Switch>
              </div>
            </Router>
    )
  };
};

export default Body;
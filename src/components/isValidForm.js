import React from "react";
import Form from "./form";
import MainPage from "./mainPage"

class isValidForm extends React.Component {
  constructor(){
    super();

    this.state={name:"",password:"", isValid:""}; 
    this.onchange = this.onchange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onchange(ev){
    this.setState({
      [ev.target.name]: ev.target.value});
  }

  submit(ev){
    const correctName = "Vasiy";
    const correctPassword = "pupkin";
    ev.preventDefault();
    if (this.state.name === correctName
        && this.state.password === correctPassword){
        this.setState({isValid:"valid"})
    } else {
      this.setState({isValid:"noValid"})
      }
  }

  componentDidMount(){

  };

  render(){

  	let renderElem =  null;

  	if (this.state.isValid === ""){
        renderElem = <Form  onchange={this.onchange} onsubmit={this.submit}/>;
    } else 
      if (this.state.isValid ==="noValid") {
    	  renderElem = <Form className="border-danger" onchange={this.onchange} onsubmit={this.submit}/>;
    } else {
      renderElem =  <MainPage name={this.state.name}/>;
    }
    return renderElem;
  };
};



  export default isValidForm;
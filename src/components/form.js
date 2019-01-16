import React from "react";


class Form extends React.Component {
 
  render(){
    let display = "none";
    let classNameList = null;
    if (this.props.className === undefined){
      classNameList = "form-control";
    
    } else {
      classNameList = this.props.className + " form-control";
    
      display = "block";
    }
    return(
      <div className="container">
        <div className="row justify-content-center">
          <form  className="mt-3 col-12 col-md-6" onSubmit={this.props.onsubmit}>
            <div className="form-group">
              <input type="text"  name="name" onChange={this.props.onchange} className={classNameList} />
            </div>
            <div className="form-group">
              <input type="password"  name="password" onChange={this.props.onchange} className={classNameList} placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Log in</button>
            <div className="d-flex justify-content-around">
              <a href="fff.com">forget password?</a>
              <a href="fff.com">create account</a>
            </div>
            <p style={{display:display}} className="text-danger text-center">Incorrect name or password. Try again or create new Account</p>
          </form>
        </div>
      </div>
    );
  };
};

    export default Form;
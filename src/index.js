import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';




function Form(props){
let display = "none";
let classNameList = null;
if (props.className === undefined){
  classNameList = "form-control";

} else {
  classNameList = props.className + " form-control";

  display = "block";
}
  return (
      <div className="container">
          <div className="row justify-content-center">
            <form  className="mt-3 col-12 col-md-6" onSubmit={props.onsubmit}>
              <div className="form-group">
                <input type="text"  name="name" onChange={props.onchange} className={classNameList} />
              </div>
              <div className="form-group">
                <input type="password"  name="password" onChange={props.onchange} className={classNameList} placeholder="Password"/>
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
}


function Bingo(props){
	return (<h1 className="alert-success text-center">{props.name},You're login in</h1>);
}

class App extends React.Component {
  constructor(props){
    super(props);

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

     }

  render(){

  	let renderElem =  null;

  	if (this.state.isValid === ""){
        renderElem = <Form  onchange={this.onchange} onsubmit={this.submit}/>;
          
    } else 
      if (this.state.isValid ==="noValid") {
    	renderElem = <Form className="border-danger" onchange={this.onchange} onsubmit={this.submit}/>;
    } else{
      renderElem =  <Bingo name={this.state.name}/>;
    }
    return renderElem;
  	};
  }

class HomeWork1 extends React.Component {
  constructor(props){
    super(props);
    this.modalShow = this.modalShow.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.state={style:''}

  }

  modalShow(ev){
    ev.preventDefault();
    this.setState({style:"block"});

  }

  closeModal(ev){
    ev.preventDefault();
     this.setState({style:"none"});
  }

  render(){
    return <Modal style={this.state.style} modalShow={this.modalShow} closeModal={this.closeModal}/>
  }
}

 function Modal(props) {

  let display = "";
  if (props.style === "block"){
    display = "block";
  };

  return (
    <div className="container text-center">
      <button type="button" onClick={props.modalShow} className="btn btn-danger">Launch modal</button>
      <div className="modal bg-secondary" style={{display:display}} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" onClick={props.closeModal} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          <div className="modal-body">
            <p>Thi is modal!</p>
          </div>
        <div className="modal-footer">
        <button type="button" onClick={props.closeModal} className="btn btn-secondary">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
    )
 }

 class HomeWork2 extends React.Component {

  render(){
    return([
        <App />,
        <HomeWork1 />
        ]
      )
  }
 }




ReactDOM.render(<HomeWork2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



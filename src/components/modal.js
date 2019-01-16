import React from "react";

class Modal extends React.Component {
  constructor(){
    super();
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
    return <Modal1 style={this.state.style} modalShow={this.modalShow} closeModal={this.closeModal}/>
  }
}

function Modal1(props) {
  let style ={};
  let display = "";
  if (props.style === "block"){
    style.display = "block";
    style.background = "rgba(0,0,0, .4)";
  };

  return (
    <div className=" text-center">
      <button type="button" onClick={props.modalShow} className="btn btn-danger">Help</button>
      <div className="modal" style={style} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" onClick={props.closeModal} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          <div className="modal-body">
          <input type="text" className="form-control" placeholder="Write us...." maxLength="255" aria-label="Write us" aria-describedby="Write us"/>
          </div>
        <div className="modal-footer">
        <button type="button" onClick={props.closeModal} className="btn btn-secondary">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
    )
 };

 export default Modal;
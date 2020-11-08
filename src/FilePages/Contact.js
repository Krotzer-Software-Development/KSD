import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap';
class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Thank You for your time and interest! \n Krotzer Software Developmnet sent your message successfully."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: "", email: "", message: ""})
  }

render(){
  return (
    <div className="PageContainer">
    <div className="Page">
    <h1> Contact </h1>
    <div className="Intro">
      <div className="email">
    {/*Email: >*/}
    Email: <a href="mailto:krotzersoftwaredevelopment@gmail.com"> krotzersoftwaredevelopment@gmail.com </a>
    <br />
    Phone:  <a href="tel:5418199410"> (541) 819 9410 </a>
    </div>
    </div>
   
   
  
  <div className="PageBody">
        
  <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Contact KSD today!</label>
              <input type="text" className="form-control" placeholder="First Name" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              <br />
              <input type="text" className="form-control" placeholder="Last Name" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          
              <br />
              <input type="text" className="form-control" placeholder="Phone Number" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              <br />
              <input type="email" className="form-control" id="email" placeholder="Email"  aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
         
          <div className="form-group">
              <label htmlFor="message">Brief discription of your </label>
              <textarea className="form-control" rows="10" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
   {/*}
        <Form onSubmit={this.handleSubmit} >
        <div id="PageContent">
        <FormGroup>
    
        <Label for="name"><div id="SubTitle"> Name </div></Label>
       
        <div>First Name: <Input
        
             type="text"
             name="name"
             onChange={this.handleChange} />
            </div>
        </FormGroup>
        </div>        
        <div id="PageContent">
     
        <FormGroup>
        <Label for="email"><div id="SubTitle"> Email </div></Label>
        <div>Email : <Input
             type="email"
             name="email"
             onChange={this.handleChange} />
             </div>
        </FormGroup>
        </div>
        <div id="PageContent">
        <FormGroup>
        <Label for="message"><div id="SubTitle"> Message </div></Label>
        <Input
             type="textarea"
             className="messageBoxStyle"
             name="message"
             size="20vw"
             onChange={this.handleChange} />
        </FormGroup>
        </div>
        <div id="PageContent">
          <div className="Button">
          <button type="submit"> Submit </button>
         </div>
         </div>
        </Form>
        */}

        </div>
        </div>
        </div>
        
      );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
}

export default Contact;
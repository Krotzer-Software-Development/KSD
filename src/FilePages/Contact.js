import React from 'react';
import axios from 'axios';
import {Row, Col, Container} from 'react-bootstrap';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap';
class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
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
    this.setState({firstName: "", lastName: "", phone: "", email: "", message: ""})
  }

render(){
  return (
    <div className="PageContainer">
    <div className="Page">
    <h1> Contact </h1>
    <div className="Intro">
     
 

        <Row>
          <div className="email">
        
 <Col>
    Email: <a href="mailto:krotzersoftwaredevelopment@gmail.com"> krotzersoftwaredevelopment@gmail.com </a>
    </Col>
    </div>
<div className="phone">
    <Col>
    Phone:  <a href="tel:5418199410"> (541) 819 9410 </a>
    </Col>
    </div>

    </Row>
    
    
    </div>
   
   
  
  <div className="PageBody">
        
  <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Contact KSD today!</label>
              <Row>
                <Col>
              <input type="text" className="form-control" placeholder="First Name" id="firstName" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} />
              </Col>
              <br />
              <Col>
              <input type="text" className="form-control" placeholder="Last Name" id="lastName" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} />
              </Col>
              </Row>
              <br />
              <input type="text" className="form-control" placeholder="Phone Number" id="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
              <br />
              <input type="email" className="form-control" id="email" placeholder="Email"  aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
         
          <div className="form-group">
              <label htmlFor="message">Brief discription of desired work needed</label>
              <textarea className="form-control" rows="10" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
        
          <div class="g-recaptcha" data-sitekey="6LddIOEZAAAAANyRLXS-CEU7ohRMY0AxbrQzfU3G"></div>
          <br />
      <button type="submit" className="btn btn-primary" value="Submit"> Submit </button>
     
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
  onFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  onLastNameChange(event) {
    this.setState({lastName: event.target.value})
  }
  onPhoneChange(event) {
    this.setState({phone: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
}

export default Contact;
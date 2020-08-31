import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap';
class Contact extends React.Component {
  constructor() {
    super()

    this.state = {
        name: ' ',
        email: ' ',
        message:' '
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange = e => {
this.setState({ [e.target.name]: e.target.value })
}
async handleSubmit(e) {
e.preventDefault()
const { name, email, message } = this.state
const form = await axios.post('/api/form', {
    name, 
    email,
    message
})
}
render(){
  return (
    <div>
    <div className="Contact">
    <h1>Contact</h1>
      
        <h4>Please send me an email</h4>
        
        <div className="column">
        
        <Form onSubmit={this.handleSubmit} >
        <div id="blockStyle">
        <FormGroup>
    
        <Label for="name"><div id="containerTitle">Name</div></Label>
       
        <div>First Name: <Input
        
             type="text"
             name="name"
             onChange={this.handleChange} />
            </div>
        </FormGroup>
        </div>        
        <div id="blockStyle">
     
        <FormGroup>
        <Label for="email"><div id="containerTitle">Email</div></Label>
        <div>Email : <Input
             type="email"
             name="email"
             onChange={this.handleChange} />
             </div>
        </FormGroup>
        </div>
        <div id="blockStyle">
        <FormGroup>
        <Label for="message"><div id="containerTitle">Message </div></Label>
        <Input
             type="textarea"
             className="messageBoxStyle"
             name="message"
             size="20vw"
             onChange={this.handleChange} />
        </FormGroup>
        </div>
        <div id="blockStyle">
         <Button id="containerTitle" >Submit</Button>
         </div>
        </Form>
        
        </div>
  
        </div>
        </div>
        
      );
  }
}

export default Contact;
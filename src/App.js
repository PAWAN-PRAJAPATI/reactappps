import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomToggle from './CustomToggle'
import AddContact from './AddContact';
import MyForm from './Myform'

import {DropdownButton,ControlLabel,Dropdown,ListGroup,ListGroupItem,MenuItem,FormGroup,FormControl} from 'react-bootstrap'
import { getAllContact } from './ApiCalls';
//import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from 'dropdown-react';

class App extends Component {


  state={
    
  }

  setList = (results)=>{  
   
    console.log(results)
    this.setState({contactlist: results})
  }

  componentDidMount(){
    getAllContact(this.setList)

  }


  render() {

    console.log("render")
    var contactlist_raw= this.state.contactlist
    if(contactlist_raw){
        console.log("contactlist_raw",contactlist_raw)
        var contactlist = contactlist_raw.map((data)=>{
          //console.log("data",data)
          return(
            <ListGroupItem href="#link1"><CustomToggle component={MyForm} bsStyle="info" name={data.fname} phone={data.phone} data={data}/></ListGroupItem>
          )
        })
    }

   
    return (
      <ListGroup>
      <ListGroupItem href="#link1"><CustomToggle component={AddContact}  bsStyle="primary" name="Add" phone="Contact" data="contact details"/></ListGroupItem>
      {contactlist}
      </ListGroup>
    );
  }
}


function   FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

export default App;

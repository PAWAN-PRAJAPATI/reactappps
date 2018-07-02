import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomToggle from './CustomToggle'
import {DropdownButton,ControlLabel,Button,MenuItem,FormGroup,FormControl,Grid,Col,Row} from 'react-bootstrap'
import AddContact from './AddContact';
import ViewContact from './ViewContact';
import {updateContact} from './ApiCalls'
//import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from 'dropdown-react';

export default class Myform extends Component {

  state={
    view:true
  }

  updateContact=(state)=>{
      console.log("state",state)
      this.changeState(state)
      updateContact(state)
  }

  changeState=(state)=>{
    this.setState({view:state.view})  

  }

  render() {
    console.log(this.props)

    if(this.state.view){
      return (
      
        <div>
          <Grid>
            <Row className="show-grid">
             <ViewContact callback={(this.changeState)} data={this.props.data}/>
            </Row>
          </Grid>
        </div>
      );
    }
      else{
        return(
          <Grid>
            <Row>
            <AddContact callback={(this.updateContact)}  data={this.props.data}/>
            </Row>
          </Grid>
        )
      }
  }
}



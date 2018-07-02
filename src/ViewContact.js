import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomToggle from './CustomToggle'
import {DropdownButton,ControlLabel,Button,MenuItem,FormGroup,FormControl,Grid,Col,Row} from 'react-bootstrap'
import AddContact from './AddContact';
//import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from 'dropdown-react';

export default class ViewContact extends Component {

    state = {
        view:false
    }
 
  render() {
      var data = this.props.data
      console.log("data",data)
      return (
      
        <div>
          
          <Grid>
            <Row>
              <Col xsOffset={11}> 
                  <Button bsStyle="info" onClick={(state)=>{
                    this.props.callback(this.state)
                  }}>Edit</Button>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col  xs={6}>
                <Infoview title="Name" value = {(data.fname)?(data.fname + " " + data.lname):""}/>
                <Infoview title="Number" value={data.phone}/>
                <Infoview title="Email" value={data.email}/>
              </Col>
              <Col xs={6}>
                <Infoview title="Address" value= {(data.add_line1)?(data.add_line1 + " " + data.add_line2):""}/>
                <Infoview title="City" value={data.city}/>
                <Infoview title="State" value={data.state}/>
                <Infoview title="Country" value={data.country}/>
                <Infoview title="zip" value={data.zip}/>
              </Col>
            </Row>

          </Grid>
           
          </div>
      );
    }
}

function Infoview({...props}){
  return(
    <Grid style={{margin:10}}>
    <Row className="show-grid">
      <Col xs={1} style={{fontWeight:'bold'}}>
        {props.title}:
      </Col>
      <Col xs={2}>
      {props.value}
      </Col>
    </Row>
    </Grid>
    )
}


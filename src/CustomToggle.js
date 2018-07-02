
import React, { Component } from 'react';
import {Panel} from 'react-bootstrap'
import {insertContact} from './ApiCalls'
export default class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  state = {
    show:false
  }



  toggle=()=>{
    var temp = ! this.state.show
    console.log(temp)
    this.setState({show:temp})
  }

  insertContact=(contact_details)=>{
    console.log("Add")
    var temp = ! this.state.show
    console.log(contact_details)
    this.setState({show:temp})

    insertContact(contact_details)
  }
  

  render() {
    return (
      <div>
        <Panel bsStyle={this.props.bsStyle}>
            <Panel.Heading>
              <Panel.Title componentClass="h3" onClick={this.toggle}>
                <div style={{marginBottom:10}}>{this.props.name}</div>
                <div>{this.props.phone}</div>
              </Panel.Title>
            </Panel.Heading>
             
             { this.state.show ?<Panel.Body> <this.props.component callback = {this.insertContact} data={this.props.data}/> </Panel.Body>: null }
        
          </Panel>
       

      </div>
    );
  }
}
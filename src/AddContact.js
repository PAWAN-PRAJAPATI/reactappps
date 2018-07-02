import React, { Component } from 'react';
import './App.css';
import {ControlLabel,Button,FormGroup,FormControl,Grid,Col,Row} from 'react-bootstrap'
//import Dropdown, {DropdownDivider, DropdownCheckbox, DropdownItem, DropdownLink} from 'dropdown-react';

export default class AddContact extends Component {

    state = {
        view:true
    }


  handleChange=(e,id)=>{
      var obj = {}
      obj[id]=e.target.value
      console.log(obj)
      this.setState(obj)
  }

  componentWillMount(){
      var data = this.props.data
      this.setState(data)
  }
  render() {

    console.log(this.state)

        return(
        <div>
            <Grid>
            <Row>
              <Col xsOffset={11}> 
                  <Button bsStyle="info" onClick={()=>{
                    this.props.callback(this.state)
                  }}>Save</Button>
              </Col>
            </Row>

            <Row>
                <Col xs={6}>
                  <form>
                      <FieldGroup
                        id="fname"
                        type="text"
                        placeholder="First Name"
                        handleChange={this.handleChange}
                        value={this.state.fname}
                      />
                      <FieldGroup
                        id="lname"
                        type="email"
                        placeholder="Last Name"
                        handleChange={this.handleChange}

                      />
                      <FieldGroup
                        id="phone"
                        type="email"
                        placeholder="phone"
                        handleChange={this.handleChange}

                      />
                      <FieldGroup
                        id="email"
                        type="email"
                        placeholder="email"
                        handleChange={this.handleChange}

                      />
                  </form>
                </Col>

                <Col xs={6}>
                  <form >
                    <FieldGroup
                      id="add_line1"
                      type="text"
                      placeholder="Address Line1"
                      handleChange={this.handleChange}

                    />
                    <FieldGroup
                      id="add_line2"
                      type="text"
                      placeholder="Address Line1"
                      handleChange={this.handleChange}

                    />                    
                    <FieldGroup
                      id="city"
                      type="text"
                      placeholder="City"
                      handleChange={this.handleChange}

                    />     
                    <FieldGroup
                      id="state"
                      type="text"
                      placeholder="State"
                      handleChange={this.handleChange}

                    />   
                    <FieldGroup
                      id="country"
                      type="text"
                      placeholder="Country"
                      handleChange={this.handleChange}

                    />                   
                    <FieldGroup
                      id="zip"
                      type="text"
                      placeholder="zip"
                      handleChange={this.handleChange}

                    />                                           
                  </form>
                </Col>
            </Row>
          </Grid>

      </div>
        )
    }
  
}
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup  controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} onChange={(e)=>props.handleChange(e,id)} />
    </FormGroup>
  );
}



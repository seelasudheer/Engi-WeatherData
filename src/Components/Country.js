import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import { CardBody } from 'react-bootstrap/Card'

export class Country extends Component {
    constructor(props){
        super(props)
        this.state={
        country:'',
        check:true
        }
    }
    handleChange=(e)=>{
 
      
      if(e.target.value){
        this.setState({
            [e.target.name]:e.target.value,
            check:false
          })
      }else{
          this.setState({
            check:true
          })
      }
      
    }
 handleSubmit=(e)=>{
   e.preventDefault()
this.props.history.push('/countryinfo',this.state.country)
 }
    render(){
        return(
            <React.Fragment>
                <Card style={{backgroundColor:"#c9c2c1"}}>
                    <Card.Body>
                <input type="text" name="country" placeholder="Enter country" onChange={this.handleChange}/><br/><br/>
                <Button variant="primary" disabled={this.state.check} onClick={this.handleSubmit}>Submit</Button>
                </Card.Body>
                </Card>
               
            </React.Fragment>
        )
    }
}

export default Country

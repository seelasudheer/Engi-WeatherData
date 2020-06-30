import React, { Component } from 'react'
import Axios from 'axios';
import {Card, Button} from 'react-bootstrap' 
export class CountryInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             info:[],
             message:'',
             show:false
        }
    }
   async componentWillMount(){
        let d=await this.callData(this.props.location.state)
    }
    callData(d) {
        console.log(d);
        Axios.get(`https://restcountries.eu/rest/v2/name/${d}`)
        .then(res=>{
            console.log(res.status);
                 if(res.status==200){
               this.setState({
                info:res.data   
               })
               console.log(res.data[0].latlng.length);
            }
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                message:'No Data Found',
                show:true
            })
        })
    }
    handleWeather=(e,data)=>{
      e.preventDefault()
      this.props.history.push('/weather',data)
    }
    redirectPage=()=>{
        this.props.history.push('/')
    }
    render() {
        const {show,info} =this.state
        return (
            <div className="mt-4">
                {
                    info.map((x,index)=>{
                        return <div key={index}>
                            
                              <Card className="mt-3" style={{backgroundColor:"#e39f9f"}}>
                                  <Card.Body>
                                      <Card.Title>
                                       <h3> Capital: {x.capital}</h3>
                                      </Card.Title>
                                      <Card.Text>
                                     <h6>   Population:  {x.population} </h6>
                                     <h6>   latlang:  {x.latlng.length>0?x.latlng[0]:<></>} </h6> 
                                     <h6>   latlang:  {x.latlng.length>0?x.latlng[1]:<></>} </h6> 
                                     <img src={x.flag} alt="Flag" width="400" height="200"/>
                                      </Card.Text>
                                  </Card.Body>
                                  <Card.Footer>
                                  <Button onClick={(e)=>this.handleWeather(e,x.capital)}>Capital Weather</Button>
                                  </Card.Footer>
                              </Card><br/>
                            </div>
                    })
                }
                {show?<div><h2>{this.state.message}</h2>
                <Button variant="danger" onClick={this.redirectPage}>Redirect to Input</Button> </div>:<></>}
            </div>
        )
    }
}

export default CountryInfo

import React, { Component } from 'react'
import Axios from 'axios';
import { Card } from 'react-bootstrap';

export class Weather extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             weathericons:[],
             current:''
        }
        console.log(props);
    }
    componentWillMount(){
        let d=this.callWeather(this.props.location.state)
    }
    callWeather=(d)=>{
         Axios.get(`http://api.weatherstack.com/current?access_key=6eb4dfdef46dfb511e7bdbb7e8d1ab0c&query=${d}`)
         .then(res=>{
          console.log(res);
          this.setState({
            weathericons:res.data.current.weather_icons,
           current:res.data.current
          })
          
          
         })
         .catch(err=>{
             console.log(err);
         })
    }
    
    render() {
        const{weather,current,weathericons} =this.state
        return (
            <div>
                <Card className="mt-3" style={{backgroundColor:"#aed0f2"}}>
                    <Card.Body>
                        <Card.Text>
                          <h3>Temperature :{current.temperature}</h3>
                          {
                              weathericons.length>0?
                              weathericons.map(x=>{
                                  return <div>
                                      <h3>Weather Icons <img src={x} alt="Icons" /></h3>
                                  </div>
                              })
                              :<></>
                          }
                            <h3>Wind Speed :{current.wind_speed}</h3>
                            <h3>Precip :{current.precip}</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Weather

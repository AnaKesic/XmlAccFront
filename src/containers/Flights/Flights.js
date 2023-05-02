import React, { Component } from 'react';
import axios from 'axios'
import classes from './Flight.module.css';
import { format, parse } from 'date-fns';
import { connect } from 'react-redux';

class Flights extends Component {

       state={

          flights:[]
       }

       componentDidMount() {
        axios.get('https://localhost:44326/api/Flight/all')
          .then(res => {
              const fli=res.data;
             this.setState({flights:fli})
             //this.state.flights=res.data;
             console.log(this.state)
          });
      }
    
    

      render() {
       const { flights} = this.state;
      
              
                      
                            return(    
                                   <React.Fragment>
                                   {flights.map(user => {
                                          const { airportDeparture,airportDestination,arrivalTime,capacity,deleted, departureTime,duration,id,ticketPrice}=user;
                                          var d1= new Date(arrivalTime);
                                          const datearr= format(d1,"dd.MM.yyyy");
                                          const timearr=format(d1,"hh:mm");

                                          var d2=new Date(departureTime);
                                          const datedep= format(d2,"dd.MM.yyyy");
                                          const timedep=format(d2,"hh:mm");
                                  return(<div className={classes.flightcard}>
                                  
                                   <div className={classes.flightcardcontent}>
                                     <div className={classes.flightrow}>
                                       <div className={classes.flightfrom}>
                                         <span className={classes.fromcode}>{airportDeparture.name}</span>
                                         <span className={classes.fromcity}>Departure date: {datearr}</span>
                                         <span className={classes.fromcity}>Departure time: {timedep}</span>
                                       </div>
                                       <div className={classes.plane}>
                                         <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
                                       </div>
                                       <div className={classes.flightto}>
                                         <span className={classes.tocode}>{airportDestination.name}</span>
                                         <span className={classes.tocity}>Arrival date: {datearr}</span>
                                         <span className={classes.tocity}>Arrival time: {timearr}</span>
                                       </div>
                                     </div>
                                     
                                     <div className={classes.flightdetailsrow}>
                                                 <div className={classes.flightoperator}>
                                                        <span className={classes.title}></span>
                                                       
                                                 </div>
                                                 <div className={classes.flightnumber}>
                                                        <span className={classes.title}>Price: {ticketPrice}</span>
                                                        {/* <span className={classes.detail}>{ticketPrice}</span> */}
                                                 </div>
                                                 <div className={classes.flightclass}>
                                                  {this.props.isAuthenticated? <button className={classes.btnn}>Buy ticket</button> :null }
                                                       
                                                 </div>
                                                 
                                    
                                  
                              </div> 
                              </div>
                              </div>
                             
       ) })}
                              </React.Fragment>
                              
                            );
                       
                      


              
                
    
     }


}

const mapStateToProps = state => {
  return {

    isAuthenticated: state.auth.token !== null,
  }}
export default connect( mapStateToProps )( Flights )
import React, { Component } from 'react';
import axios from 'axios'
import classes from './GetAll.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Icon } from 'semantic-ui-react'
import { minutesToSeconds } from 'date-fns';
import { array } from 'prop-types';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = 
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
  
class GetAll extends Component {
    state={

        
        flights:[]
     }

     componentDidMount() {
      axios.get('https://localhost:44331/api/Accommodation/all')
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
                                        const { name,
                                        price,
                                        location,
                                        wifiIncluded,
                                        acInclude,
                                        freeParking,
                                        minCapacity,
                                        maxCapacity,
                                        imagePath,
                                        availability,
                                        id,
                                        deleted}=user;

                          let slider =  imagePath.map(image=>({
                            url:  `data:image/jpeg;base64,${image}`
                               
                        
                          } ) );
                          let arraymin=[];
                          let arraymax=[];
                           for (let i = 0; i < minCapacity; i++) {
                            arraymin.push("ana");
                          }
                          let min = arraymin.map(image=>(
                             <span><Icon name="user" size="small"/></span>
                          ));

                          for (let i = 0; i < maxCapacity; i++) {
                            arraymax.push("ana");
                          }
                          let max = arraymax.map(image=>(
                             <span><Icon name="user" size="small"/></span>
                          ));

                                return(
                                
                                <div>
                                    <div className={classes.card}>
                                    <div className={classes.media}>
                                    <SimpleImageSlider
                                     width={500}
                                     height={300}
                                    images={slider}
                                    showNavs={true}
                                    /> 
                                   </div>
                                   <div className={classes.optionalheader}>
                                        <div className={classes.primarytitle}>
                                      <h2 className={classes.primarytext}>
                                   
                                         {name}
                                        </h2>
                                        <div   className={classes.primarytextt }>$99</div>
                                        </div>
                                        </div>
                                      <div className={classes.optionalheader}>
                                      <Icon name="map marker alternate" size="large"/>
                                       {location.street} {location.number}, {location.city}, {location.state}
                                       </div>
                                      
                                      
                                     
                                       <div className={classes.optionalheader}  >

                                        {min} - {max}
                                        </div>
                                   
                                   
                                   </div>
                                  
                                </div>
                                                                      
                             
                           
                           
                                  ) })}
                            </React.Fragment>
                            
                          );
                     
                    


            
              
  
   }



}

export default GetAll 


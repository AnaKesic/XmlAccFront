import React, { Component } from 'react';
import axios from 'axios'

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
                                        
                                return(
                                
                                <div>
                                   <img src={`data:image/jpeg;base64,${imagePath[0]}`} />
                                </div>
                                                                            
                             
                           
                           
     ) })}
                            </React.Fragment>
                            
                          );
                     
                    


            
              
  
   }



}

export default GetAll 


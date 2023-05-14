/*import React, { Component } from 'react';
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
      axios.get('http://localhost:8081/api/Accommodation/all')
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
  
  export default GetAll;*/
   /*
   import React, { Component } from 'react';
   import axios from 'axios'
   import classes from './GetAll.module.css';
   import SimpleImageSlider from "react-simple-image-slider";
   import { Icon, Input, Button } from 'semantic-ui-react'
   import { minutesToSeconds } from 'date-fns';
   import { array } from 'prop-types';
   
   const styleLink = document.createElement("link");
   styleLink.rel = "stylesheet";
   styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
   document.head.appendChild(styleLink);
   
   class GetAll extends Component {
     state = {
       flights: [],
       searchLocation: "",
       searchGuests: "",
       searchStartDate: "",
       searchEndDate: ""
     }
   
     componentDidMount() {
       axios.get('http://localhost:8081/api/Accommodation/all')
         .then(res => {
           const fli = res.data;
           this.setState({ flights: fli })
           console.log(this.state)
         });
     }
   
     handleSearch = () => {
       const { searchLocation, searchGuests, searchStartDate, searchEndDate } = this.state;
       // Izvrši logiku pretrage na osnovu unetih vrednosti
       // Ovde možeš koristiti axios za slanje HTTP zahteva sa parametrima pretrage
       // Prikazati rezultate u this.state.flights
     }
   
     handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value });
     }
   
     render() {
       const { flights, searchLocation, searchGuests, searchStartDate, searchEndDate } = this.state;
   
       let filteredFlights = flights; // Pretraga se primenjuje na filteredFlights
   
       if (searchLocation) {
         filteredFlights = filteredFlights.filter(flight => flight.location.city.toLowerCase().includes(searchLocation.toLowerCase()));
       }
   
       if (searchGuests) {
         filteredFlights = filteredFlights.filter(flight => flight.maxCapacity >= searchGuests);
       }
   
       if (searchStartDate) {
         filteredFlights = filteredFlights.filter(flight => flight.availability.includes(searchStartDate));
       }
   
       if (searchEndDate) {
         filteredFlights = filteredFlights.filter(flight => flight.availability.includes(searchEndDate));
       }
   
       return (
         <React.Fragment>
           <div className={classes.searchContainer}>
             <Input
               name="searchLocation"
               value={searchLocation}
               onChange={this.handleChange}
               placeholder="Lokacija"
             />
             <Input
               name="searchGuests"
               value={searchGuests}
               onChange={this.handleChange}
               placeholder="Broj gostiju"
             />
             <Input
               name="searchStartDate"
               value={searchStartDate}
               onChange={this.handleChange}
               placeholder="Početni datum"
             />
             <Input
               name="searchEndDate"
               value={searchEndDate}
               onChange={this.handleChange}
               placeholder="Krajnji datum"
             />
             <Button primary onClick={this.handleSearch}>Pretraga</Button>
           </div>
           {filteredFlights.map(user => {
             const {
               name,
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
               deleted
             } = user;
   
             let slider =  imagePath.map(image=>({
              url: `data:image/jpeg;base64,${image}`
            }));
  
            let arraymin = [];
            let arraymax = [];
            for (let i = 0; i < minCapacity; i++) {
              arraymin.push("ana");
            }
            let min = arraymin.map(image => (
              <span><Icon name="user" size="small" /></span>
            ));
  
            for (let i = 0; i < maxCapacity; i++) {
              arraymax.push("ana");
            }
            let max = arraymax.map(image => (
              <span><Icon name="user" size="small" /></span>
            ));
  
            return (
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
                      <div className={classes.primarytextt}>$99</div>
                    </div>
                  </div>
                  <div className={classes.optionalheader}>
                    <Icon name="map marker alternate" size="large" />
                    {location.street} {location.number}, {location.city}, {location.state}
                  </div>
                  <div className={classes.optionalheader}>
                    {min} - {max}
                  </div>
                </div>
              </div>
            )
          })}
        </React.Fragment>
      );
    }
  }
  
  export default GetAll;*/
  import React, { Component } from 'react';
import axios from 'axios';
import classes from './GetAll.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Icon, Input, Button } from 'semantic-ui-react';
import { minutesToSeconds } from 'date-fns';
import { array } from 'prop-types';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class GetAll extends Component {
  state = {
    flights: [],
    searchLocation: "",
    searchGuests: "",
    searchStartDate: "",
    searchEndDate: ""
  };

  componentDidMount() {
    axios.get('http://localhost:8081/api/Accommodation/all')
      .then(res => {
        const fli = res.data;
        this.setState({ flights: fli });
        console.log(this.state);
      });
  }

  handleSearch = () => {
    const { searchLocation, searchGuests, searchStartDate, searchEndDate } = this.state;
    // Izvrši logiku pretrage na osnovu unetih vrednosti
    // Ovde možeš koristiti axios za slanje HTTP zahteva sa parametrima pretrage
    // Prikazati rezultate u this.state.flights
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { flights, searchLocation, searchGuests, searchStartDate, searchEndDate } = this.state;

    let filteredFlights = flights; // Pretraga se primenjuje na filteredFlights

    if (searchLocation) {
      filteredFlights = filteredFlights.filter(flight => flight.location.city.toLowerCase().includes(searchLocation.toLowerCase()));
    }

    if (searchGuests) {
      filteredFlights = filteredFlights.filter(flight => flight.maxCapacity >= searchGuests);
    }

    if (searchStartDate) {
      filteredFlights = filteredFlights.filter(flight => flight.availability.includes(searchStartDate));
    }

    if (searchEndDate) {
      filteredFlights = filteredFlights.filter(flight => flight.availability.includes(searchEndDate));
    }

    return (
      <React.Fragment>
        <div className={classes.searchContainer}>
          <Input
            name="searchLocation"
            value={searchLocation}
            onChange={this.handleChange}
            placeholder="Location"
          />
          <Input
            name="searchGuests"
            value={searchGuests}
            onChange={this.handleChange}
            placeholder="Number of guests"
          />
          <Input
            name="searchStartDate"
            value={searchStartDate}
            onChange={this.handleChange}
            placeholder="Start date"
          />
          <Input
            name="searchEndDate"
            value={searchEndDate}
            onChange={this.handleChange}
            placeholder="End date"
          />
          <Button primary onClick={this.handleSearch}>Search</Button>
        </div>

        <div className={classes.flightsContainer}>
          {filteredFlights.map(user => {
            const {
              name,
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
              deleted
            } = user;

            let slider = imagePath.map(image => ({
              url: `data:image/jpeg;base64,${image}`
            }));

            let arraymin = [];
            let arraymax = [];
            for (let i = 0; i < minCapacity; i++) {
              arraymin.push("ana");
            }
            let min = arraymin.map(image => (
              <span><Icon name="user" size="small" /></span>
            ));

            for (let i = 0; i < maxCapacity; i++) {
              arraymax.push("ana");
            }
            let max = arraymax.map(image => (
              <span><Icon name="user" size="small" /></span>
            ));

            return (
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
                      <div className={classes.primarytextt}>{price}&euro;</div>
                    </div>
                  </div>
                  <div className={classes.optionalheader}>
                    <Icon name="map marker alternate" size="large" />
                    {location.street} {location.number}, {location.city}, {location.state}
                  </div>
                  <div className={classes.optionalheader}>
                    {min} - {max}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default GetAll;


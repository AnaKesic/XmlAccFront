import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
       
       
        
      
        {(!props.isAuthenticated ) ?
             <NavigationItem link="/auth">Sign in</NavigationItem>
            : <NavigationItem link="/myprofile">My profile</NavigationItem>}

        
       { (!props.isHost && props.isAuthenticated)?
             <NavigationItem link="/myreservations"> My reservations</NavigationItem>
             :null}

             

      { (props.isHost && props.isAuthenticated)?
             <NavigationItem link="/accomodation/create"> Create new accommodation </NavigationItem>
             :null}   
       
      
    
       { (!props.isAuthenticated)?
             <NavigationItem link="/login"> Log in</NavigationItem>
             : (<NavigationItem link="/logout">Logout</NavigationItem>)}
       
    </ul>
);

export default navigationItems;
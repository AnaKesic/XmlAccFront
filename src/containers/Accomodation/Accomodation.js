import { Button } from "@material-ui/core";
import React, { useState } from 'react';
import { createAccomodation } from "../../services/AccomodationService";
import classes from './Accomodation.css';



export default Accomodation => {

    const [accomodationDto, setAccomodationDto] = useState({
        name: '',
        price: '',
        wifiIncluded: false,
        acInclude: false,
        freeParking: false,
        minCapacity: 0,
        maxCapacity: 0,
        location: {
            street: '',
            number: '',
            city: '',
            state: ''
        }
    });

    const [fileState, setFileState] = useState([]);

    const submitHandler = () => {
        if (!accomodationDto.name || !accomodationDto.price) {
            alert('All fields are required');
            return;
        }

        createAccomodation(accomodationDto, fileState).then(data => {
            console.log('Success');
            window.location.href = '/accommodation/all';
        }).catch(err => {
            console.log(err);
        })
    }

    const inputChangeHandler = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            setAccomodationDto({
                ...accomodationDto,
                [name]: checked
            })
        } else {
            setAccomodationDto({
                ...accomodationDto,
                [name]: value
            })
        }
    }

    const handleFileChange = (event) => {
       
        const file = event.target.files[0];
        setFileState(file);
    };
  



    return (
        <div className={classes.accomodationForm}>

            {
                Array.from(fileState).map(item => {
                return (
                    <span>
                    <img
                        style={{ padding: '10px' }}
                        width={150} height={100}
                        src={item ? URL.createObjectURL(item) : null} />
                    </span>
                )
                })
            }
            <form onSubmit={this.submitHandler}>
                <div >
                    Image<input type='file' multiple  name='file' onChange={(event) => setFileState(event.target.files)}/> 
                    Name<input type="text" name="name" onChange={( event ) => inputChangeHandler( event, 'type')}/> 
                    Street<input type="text"name="location.street" onChange={( event ) => inputChangeHandler( event, 'type')}/>
                    Number<input type="text"name="location.number" onChange={( event ) => inputChangeHandler( event, 'type')}/> 
                    City<input type="text"name="location.city" onChange={( event ) => inputChangeHandler( event, 'type')}/> 
                    State<input type="text"name="location.state" onChange={( event ) => inputChangeHandler( event, 'type')}/> 
                    Price<input type="number" name="price" onChange={( event ) => inputChangeHandler( event, 'type')}/> 
                    MinCapacity<input type="number" name="minCapacity" onChange={( event ) => inputChangeHandler( event, 'type')}/> 
                    MaxCapacity<input type="number" name="maxCapacity" onChange={( event ) => inputChangeHandler( event, 'type')}/> 
                    <label>
                        <input type="checkbox" name="wifiIncluded" checked={accomodationDto.wifiIncluded} onChange={inputChangeHandler} /> WiFi included
                    </label>
                    <label>
                        <input type="checkbox" name="acInclude" checked={accomodationDto.acInclude} onChange={inputChangeHandler} /> AC included
                    </label>
                    <label>
                        <input type="checkbox" name="freeParking" checked={accomodationDto.freeParking} onChange={inputChangeHandler} /> Free parking
                    </label>
                    <Button btnType="Success" onClick={submitHandler}>SUBMIT</Button>
                </div>
            </form>
        </div>
    )
};
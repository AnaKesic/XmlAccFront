import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import classes from './UpdateProfile.css';

import './MyProfile.css';

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8084/api/User/getemail/${userId}`);
        const userData = response.data;
        setUser(userData);
        setName(userData.name);
        setSurname(userData.surname);
        setCity(userData.city);
        setEmail(userData.email);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const updatedUser = {
        ...user,
        name: name,
        surname: surname,
        city: city,
        email: email,
      };
  
      await axios.put(`http://localhost:8084/api/User/${email}`, updatedUser);
      // Redirekcija na myprofile
      window.location.href = '/myprofile';
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className={classes.profile}>
      <h2>User Profile</h2>
      <div className={classes.form}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className={classes.form}>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Enter your surname"
        />
      </div>
      <div className={classes.form}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city"
        />
      </div>
      <div className={classes.form}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className={classes.buttons}>
      <button className={classes.update} onClick={handleUpdateProfile}>
        Update Profile
      </button>
      <button className={classes.delete}>Delete Profile</button>
      </div>
    </div>
  );
};

export default UpdateProfile;
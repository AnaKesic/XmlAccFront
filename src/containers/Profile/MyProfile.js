import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import classes from './MyProfile.css';

const MyProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8084/api/User/getemail/${userId}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleUpdateProfile = () => {
    window.location.href = '/update-profile'; // Redirekcija na /update-profile putanju
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className={classes.form}>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>City: {user.city}</p>
      <p>Email: {user.email}</p>
      <button className={classes.button} onClick={handleUpdateProfile}>
        Update Profile
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(MyProfile);
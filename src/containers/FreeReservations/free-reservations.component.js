import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchFreeReservations } from "../../services/ReservationsService";

const FreeReservationsList = () => {

    const [reservations, setReservations] = useState([]);
    const [searchText, setSerachText] = useState("");
    const [currentReservation, setCurrentReservation] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        retrieveReservations();
    }, []);
  
    const onChangeSearchText = (e) => {
        setSerachText(e.target.value)
      }
    
      const retrieveReservations = () => {
        searchFreeReservations()
          .then(response => {
            setReservations(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
    //   const refreshList = () => {
    //     this.retrieveTutorials();
    //     this.setState({
    //       currentReservation: null,
    //       currentIndex: -1
    //     });
    //   }
    
    //   const setActiveTutorial(tutorial, index) {
    //     this.setState({
    //       currentReservation: tutorial,
    //       currentIndex: index
    //     });
    //   }
    
    //   removeAllTutorials() {
    //     TutorialDataService.deleteAll()
    //       .then(response => {
    //         console.log(response.data);
    //         this.refreshList();
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   }
    
      const search = () => {
      setCurrentReservation(null);

        searchFreeReservations()
          .then(response => {
            setReservations(response.data)
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
        return (
          <div className="list row">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title"
                  value={searchText}
                  onChange={onChangeSearchText}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={search}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4>Free reservations list</h4>
    
              <ul className="list-group">
                {reservations &&
                  reservations.map((reservation, index) => (
                    <li
                      className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveTutorial(reservation, index)}
                      key={index}
                    >
                      {reservation.title}
                    </li>
                  ))}
              </ul>
    
            </div>
            <div className="col-md-6">
              {currentReservation ? (
                <div>
                  <h4>Reservation</h4>
                  <div>
                    <label>
                      <strong>Title:</strong>
                    </label>{" "}
                    {currentReservation.title}
                  </div>
                  <div>
                    <label>
                      <strong>Description:</strong>
                    </label>{" "}
                    {currentReservation.description}
                  </div>
                  <div>
                    <label>
                      <strong>Status:</strong>
                    </label>{" "}
                    {currentReservation.published ? "Published" : "Pending"}
                  </div>
                </div>
              ) : (
                <div>
                  <br />
                  <p>Please click on a Reservation...</p>
                </div>
              )}
            </div>
          </div>
        ); 
}

export default FreeReservationsList;
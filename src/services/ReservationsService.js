import Axios from "axios"

const searchFreeReservations = (searchParams) => {
    //return Axios.get(`http://localhost:8083/api/Reservations/search?location=${searchParams?.location}&start=${searchParams?.start}&end=${searchParams?.end}`);
    return Axios.get(`http://localhost:8083/api/Reservations/search`);
};

export {searchFreeReservations}
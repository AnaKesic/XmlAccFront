import Axios from "axios"

const createAccomodation = (accomodationDto, file) => {
    const formData = new FormData();
    formData.append('Image', file)
    for (const key in accomodationDto) {
        formData.append(key, accomodationDto[key])
    }
    
    return Axios.post("http://localhost:8081/api/Accommodation/add", formData, {contentType: 'multipart/form-data'});
};

export {createAccomodation}

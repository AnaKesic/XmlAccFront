import Axios from "axios"

const createAccomodation = (accomodationDto, files) => {
    const formData = new FormData();
    for (const image of files) {
        formData.append("Image", image);
      }
  
    
    for (const key in accomodationDto) {
        formData.append(key, accomodationDto[key])
    }
    
    return Axios.post("http://localhost:8081/api/Accommodation/add", formData, {contentType: 'multipart/form-data'});
};

export {createAccomodation}

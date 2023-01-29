import axios from "axios";



const Axios = axios.create({
    baseURL: `http://huangdi.pythonanywhere.com/api/`,
})



export default Axios
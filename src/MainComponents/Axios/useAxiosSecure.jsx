import axios from "axios";
const axiosSecures=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    return axiosSecures;
};

export default useAxiosSecure;
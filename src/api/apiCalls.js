import axios from 'axios';

export const Signup = (user) => {
    return axios.post("/api/1.0/users", user);
}
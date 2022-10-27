import {getAuth} from "firebase/auth";
import {app} from "../firebaseConfig";
import axios from "axios";
import httpData from "../shared/utils/httpData";


const status401Interceptor =  async (err: any) => {

    if(err.response && err.response.status === 401){
        console.log('processo di logout');
        const originalRequest = err.config;
        if (err.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            console.log(originalRequest);
            const auth = getAuth(app);
            const access_token = await auth.currentUser?.getIdToken(true);
            httpData.other.token = access_token;
            // originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
            // console.log(originalRequest)
            return axios(originalRequest);
        }
        return Promise.reject(err);

        // risistemare appena va nuovamente in 401

    }
    return Promise.reject(err);
}

export default status401Interceptor;

import axios from "axios";
import { loginApi, signupApi } from "../constants/userConstant";

export const login = (username, pass) => async(dispatch) => {
    await dispatch({
        type: loginApi.REQUEST,
        payload: {loading: true}
    });
    try {
        const {data} = (await axios.post('api/user-management/login',{
            userName: username,
            password: pass
          }));
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        const accountData = (await axios.get('api/account'));
        localStorage.setItem('name', accountData.data.firstName + " " + accountData.data.lastName );
        localStorage.setItem('id', accountData.data.id);
        await dispatch({
            type: loginApi.SUCCESS,
            payload:{loading: false, data:data}
        });
    } catch {
        await dispatch({
            type: loginApi.ERROR,
            payload:{loading: false}
        });
    }
}

export const signup = (signup) => async(dispatch) => {
    await dispatch({
        type: signupApi.REQUEST,
        payload: {loading: true}
    });
    try {
        console.log(signup,"signup data");
        const {data} = (await axios.post('api/user-management/create/user',signup));
        await dispatch({
            type: signupApi.SUCCESS,
            payload:{loading: false, data:data}
        });
    } catch {
        await dispatch({
            type: signupApi.ERROR,
            payload:{loading: false}
        });
    }
}
import setupInterceptors from "../../globals/interceptors";
import { loginApi } from "../constants/userConstant";

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
        console.log(data);
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
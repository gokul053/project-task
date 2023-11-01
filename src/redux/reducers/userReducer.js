import { loginApi } from "../constants/userConstant";

let intialValues = {
    loginModal: []
}
export const loginReducer = (value = intialValues, action) => {
    switch (action?.type) {
        case loginApi.REQUEST:
            return { loginModal: action?.payload };
        case loginApi.SUCCESS:
            return { loginModal: action?.payload };
        case loginApi.ERROR:
            return { loginModal: action?.payload };
        default:
            return value;
    }
}
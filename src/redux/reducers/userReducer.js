import { loginApi, signupApi } from "../constants/userConstant";

let intialValues = {
    loginModal: [],
    signupModal: []
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
export const signupReducer = (value = intialValues, action) => {
    switch (action?.type) {
        case signupApi.REQUEST:
            return { signupModal: action?.payload };
        case signupApi.SUCCESS:
            return { signupModal: action?.payload };
        case signupApi.ERROR:
            return { signupModal: action?.payload };
        default:
            return value;
    }
}
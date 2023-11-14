import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getAllSportsReducer, getSportPhotoReducer } from "./reducers/sportReducer";
import { getFacilityCountReducer } from "./reducers/facilityReducer";
import { loginReducer, signupReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    getAllSport: getAllSportsReducer,
    getAllSportPhoto: getSportPhotoReducer,
    getFacilityCount: getFacilityCountReducer,
    loginApi: loginReducer,
    signUpApi: signupReducer
});

const initialState = {};
const middleWare = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleWare));

export default store;
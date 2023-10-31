import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getAllSportsReducer, getSportPhotoReducer } from "./reducers/sportReducer";
import { getFacilityCountReducer } from "./reducers/facilityReducer";

const reducer = combineReducers({
    getAllSport: getAllSportsReducer,
    getAllSportPhoto: getSportPhotoReducer,
    getFacilityCount: getFacilityCountReducer,
});

const initialState = {};
const middleWare = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleWare));

export default store;
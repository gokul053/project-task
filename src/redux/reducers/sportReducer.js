import { getAllSportsApi, getAllSportPhotoApi } from "../constants/sportConstant";

let intialValues = {
    getSportsModal : [],
    getSportPhotoModal:[],
}
export const getAllSportsReducer = (value = intialValues, action) => {
    switch (action?.type) {
        case getAllSportsApi.REQUEST:
            return { getSportsModal: action?.payload };
        case getAllSportsApi.SUCCESS:
            return { getSportsModal: action?.payload };
        case getAllSportsApi.ERROR:
            return { getSportsModal: action?.payload };
        default:
            return value;
    }
}
export const getSportPhotoReducer = (value = intialValues, action) => {
    switch (action?.type) {
        case getAllSportPhotoApi.REQUEST:
            return { getSportPhotoModal: action?.payload };
        case getAllSportPhotoApi.SUCCESS:
            return { getSportPhotoModal: action?.payload };
        case getAllSportPhotoApi.ERROR:
            return { getSportPhotoModal: action?.payload };
        default:
            return value;
    }
}
import axios from "axios";
import { getAllSportsApi, getAllSportPhotoApi } from "../constants/sportConstant";

export const getAllSport = () => async (dispatch) => {
    await dispatch({
        type: getAllSportsApi.REQUEST,
        payload: {loading: true, data: [1,1,1,1]}
    });
    try {
        const response = (await axios.get("api/sports"));
        console.log(response?.status);
        const tempData = response?.status === 200 && await Promise.all(
            response?.data?.map(async(sport)=>{
            try{
                await axios.get(`api/facilities/count?sportId.equals=${sport?.id}`)
                .then((response) => (sport = {...sport, facilityCount: response?.data}));
                return sport;
            } catch {
                await dispatch({
                    type: getAllSportsApi.ERROR,
                    payload:{loading: false}
                });
            }
        })
        );
        await dispatch({
            type: getAllSportsApi.SUCCESS,
            payload: response?.status === 200 ? {loading: false, data: tempData } : {loading: true, data: [1,1,1,1]}
        });
    } catch {
        await dispatch({
            type: getAllSportsApi.ERROR,
            payload:{loading: true, data:[1,1,1,1]}
        });
    }
}

export const getAllSportPhoto = () => async(dispatch) => {
    await dispatch({
        type: getAllSportPhotoApi.REQUEST,
        payload: {loading: true}
    });
    try {
        const {data} = (await axios.get('api/v1/sport-photos'));
        await dispatch({
            type: getAllSportPhotoApi.SUCCESS,
            payload:{loading: false, data:data}
        });
    } catch {
        await dispatch({
            type: getAllSportPhotoApi.ERROR,
            payload:{loading: false, data:[1,1,1,1]}
        });
    }
}
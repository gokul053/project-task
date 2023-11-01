import axios from "axios";
import { getAllSportsApi, getAllSportPhotoApi } from "../constants/sportConstant";

export const getAllSport = () => async (dispatch) => {
    await dispatch({
        type: getAllSportsApi.REQUEST,
        payload: {loading: true}
    });
    try {
        const {data} = (await axios.get("api/sports"));
        const tempData = await Promise.all(
            data.map(async(sport)=>{
            try{
                await axios.get(`api/facilities/count?sportId.equals=${sport.id}`)
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
            payload:{loading: false, data:tempData}
        });
    } catch {
        await dispatch({
            type: getAllSportsApi.ERROR,
            payload:{loading: false}
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
            payload:{loading: false}
        });
    }
}
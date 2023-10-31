import axios from "axios";
import { getAllSportsApi, getAllSportPhotoApi } from "../constants/sportConstant";
import { BASR_URL, TOKEN } from "../../pageConstants";

export const getAllSport = () => async (dispatch) => {
    await dispatch({
        type: getAllSportsApi.REQUEST,
        payload: {loading: true}
    });
    try {
        const {data} = (await axios.get(BASR_URL + "api/sports", {headers:{'Authorization': TOKEN}}));
        const tempData = await Promise.all(
            data.map(async(sport)=>{
            try{
                await axios.get(BASR_URL + `api/facilities/count?sportId.equals=${sport.id}`, {headers:{'Authorization': TOKEN}})
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
        const {data} = (await axios.get(BASR_URL + 'api/v1/sport-photos', {headers:{'Authorization': TOKEN}}));
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
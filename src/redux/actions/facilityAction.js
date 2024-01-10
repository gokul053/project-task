import axios from "axios";
import { BASR_URL, TOKEN } from "../../pageConstants";
import { getFacilityCountApi } from "../constants/facilityConstant";

export const getFacilityCount = (id) => async (dispatch) => {
    await dispatch({
        type: getFacilityCountApi.REQUEST,
        payload: {loading: true}
    });
    try {
        const {data} = await axios.get(BASR_URL + `api/facilities/count?sportId.equals=${id}`, {headers:{'Authorization': TOKEN}});
        await dispatch({
            type: getFacilityCountApi.SUCCESS,
            payload:{loading: false, data:{sportId: id, count: data}}
        });
    } catch {
        await dispatch({
            type: getFacilityCountApi.ERROR,
            payload:{loading: false}
        });
    }
}
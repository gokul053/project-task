import axios from "axios";
import { getAllSportsApi, getAllSportPhotoApi } from "../constants/sportConstant";
import { BASR_URL } from "../../pageConstants";

const token = 'Bearer eyJraWQiOiJjNkp0VXUzaW13OFlMajV4R0Y4N1dDNGpUWm9PZUtLWnBVQ2NodFhlK1FVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzYTRhZGQ2NC1mNzQyLTQ4OWMtYjdmMy00NGJhOGFkMjhmMTYiLCJjb2duaXRvOmdyb3VwcyI6WyJST0xFX09SR19BRE1JTiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9odkRPbVlXN0kiLCJjbGllbnRfaWQiOiIydDFjZmx2NGljaHFpcGhtMjhrNHVvZDBlcSIsIm9yaWdpbl9qdGkiOiJiMWQwY2VlZC1iMjRkLTQ3NTMtYWUyMC05OTM2OWMyNmEyNTEiLCJldmVudF9pZCI6ImM2ZmY3YWU0LWE5MDYtNGE0OS1iZWU5LTFhZTE1ZGVmM2EzMSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTg2NDE0NzgsImV4cCI6MTY5ODY1OTQ3OCwiaWF0IjoxNjk4NjQxNDc4LCJqdGkiOiJlMjY0NWRmOS0wYmNhLTQ2NDAtYjY0MS0wZDM1ZDA2YTA2ODkiLCJ1c2VybmFtZSI6IjVxeHcwcXRvNzNAa2xvdmVub2RlLmNvbSJ9.XA4bzK7dzqDOP4gsPMdB4kG0wSIOfggfihrvLjDiMT-YaWvw5G1kh07iD8oYWIGQAYMYDWvSZpJZMHr-O6o6RrKYuIxAcQ_97GAAbnpTJKqEplgXIh82_zu_XrHU_DlJjSziWv9QTXJKloO355y7F3Ce8u0VnEHWemIG9An4-Ur_y8fffbhud8PfSTD5tWvEhndS-grlvXf0Jw5BV3EhhMgxvOpoYySDB4_L72S-wbBHRZfkwTwEDZQh_TnEBGdRKlvKbNyzjlcZRIZY7O_x3rKIEKINVbbjU1upW6PlqlfhCSEphiLgaodlrqmhomDTnnnho6OyMIvmm9NW_e9vXw';
export const getAllSport = () => async (dispatch) => {
    await dispatch({
        type: getAllSportsApi.REQUEST,
        payload: {loading: true}
    });
    try {
        const {data} = (await axios.get(BASR_URL + "api/sports", {headers:{'Authorization':token}}));
        await dispatch({
            type: getAllSportsApi.SUCCESS,
            payload:{loading: false, data:data}
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
        const {data} = (await axios.get(BASR_URL + 'api/v1/sport-photos', {headers:{'Authorization':token}}));
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
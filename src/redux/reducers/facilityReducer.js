let intialValues = {
    getFacilityCount : 0,
}
export const getFacilityCountReducer = (value = intialValues, action) => {
    switch (action?.type) {
        case getFacilityCountApi.REQUEST:
            return { getFacilityCountModal: action?.payload };
        case getFacilityCountApi.SUCCESS:
            return { getFacilityCountModal: action?.payload };
        case getFacilityCountApi.ERROR:
            return { getFacilityCountModal: action?.payload };
        default:
            return value;
    }
}
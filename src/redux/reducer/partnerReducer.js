const intialState = {
    partnerdata: [],
    spinner: false
};


const reducer = (state = intialState, action) => {
    if (action.type === 'PARTNER_START') {
        return {
            ...state,
            spinner: true
        }
    } else if (action.type === 'PARTNER_SUCCESS') {
        return {
            ...state,
            spinner: false,
            partnerdata: action.data
        }
    }


    return state;
};
export default reducer;
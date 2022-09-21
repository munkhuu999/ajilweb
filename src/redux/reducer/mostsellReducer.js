const intialState = {
    mostselldata: [],
    spinner: false
};


const reducer = (state = intialState, action) => {
    if (action.type === 'MOST_SELL_START') {
        return {
            ...state,
            spinner: true
        }
    } else if (action.type === 'MOST_SELL_SUCCESS') {
        return {
            ...state,
            spinner: false,
            mostselldata: action.data
        }
    }


    return state;
};
export default reducer;

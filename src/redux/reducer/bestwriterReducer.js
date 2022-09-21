const intialState = {
    bestwriterdata: [],
    spinner: false
};


const reducer = (state = intialState, action) => {
    if (action.type === 'BESTWRITER_START') {
        return {
            ...state,
            spinner: true
        }
    } else if (action.type === 'BESTWRITER_SUCCESS') {
        return {
            ...state,
            spinner: false,
            bestwriterdata: action.data
        }
    }


    return state;
};
export default reducer;
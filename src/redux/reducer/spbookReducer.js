const intialState = {
    mydata: [],
    spinner: false
};


const reducer = (state = intialState, action) => {
    if (action.type === 'DOWNLOAD_START') {
        return {
            ...state,
            spinner: true
        }
    } else if (action.type === 'DOWNLOAD_SUCCESS') {
        return {
            ...state,
            spinner: false,
            mydata: action.data
        }
    }


    return state;
};
export default reducer;

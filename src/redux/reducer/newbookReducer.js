const intialState = {
    newbookdata: [],
    spinner: false
};


const reducer = (state = intialState, action) => {
    if (action.type === 'NEWBOOK_START') {
        return {
            ...state,
            spinner: true
        }
    } else if (action.type === 'NEWBOOK_SUCCESS') {
        return {
            ...state,
            spinner: false,
            newbookdata: action.data
        }
    }


    return state;
};
export default reducer;

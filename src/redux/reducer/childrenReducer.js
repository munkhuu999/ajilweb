const intialState = {
    ChildrenData: [],
    spinner: false
};


const reducer = (state = intialState, action) => {
    if (action.type === 'CHILDREN_START') {
        return {
            ...state,
            spinner: true
        }
    } else if (action.type === 'CHILDREN_SUCCESS') {
        return {
            ...state,
            spinner: false,
            ChildrenData: action.data
        }
    }


    return state;
};
export default reducer;

import axios from 'axios';

export const DownloadChildren = () => {
    return function (dispatch) {
        dispatch(childrenStart());
        
        axios.get('http://localhost:8000/api/sql/children/')
            .then(e => {
                const downdata = e.data.recordset;
               console.log('ffffffffffffffffffffffffffffff   ',downdata);
             dispatch(childrenSuccess(downdata));

            })
            .catch((err) => console.log('aldaaaa garlaaa', err));
    }
};


export const childrenStart = () => {
    return {
        type: 'CHILDREN_START'
    };
};
export const childrenSuccess = (data) => {
    return {
        type: 'CHILDREN_SUCCESS',
        data

    };
};
export const childrenError = (error) => {
    return {
        type: 'CHILDREN_ERROR',
        error
    };
};
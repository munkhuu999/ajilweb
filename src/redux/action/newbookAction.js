import axios from 'axios';

export const DownloadAllNewBook = () => {
    return function (dispatch) {
        dispatch(newbookStart());
        
        axios.get('http://localhost:8000/api/sql/newbook/')
            .then(e => {
                const downdata = e.data.recordset;
               console.log('ffffffffffffffffffffffffffffff   ',downdata);
             dispatch(newbookSuccess(downdata));

            })
            .catch((err) => console.log('aldaaaa garlaaa', err));
    }
};


export const newbookStart = () => {
    return {
        type: 'NEWBOOK_START'
    };
};
export const newbookSuccess = (data) => {
    return {
        type: 'NEWBOOK_SUCCESS',
        data

    };
};
export const newbookError = (error) => {
    return {
        type: 'MOST_SELL_ERROR',
        error
    };
};
import axios from 'axios';

export const DownloadAllMostSell = () => {
    return function (dispatch) {
        dispatch(mostSellStart());
        
        axios.get('http://localhost:8000/api/sql/mostsell/')
            .then(e => {
                const downdata = e.data.recordset;
               console.log('ffffffffffffffffffffffffffffff   ',downdata);
             dispatch(mostSellSuccess(downdata));

            })
            .catch((err) => console.log('aldaaaa garlaaa', err));
    }
};


export const mostSellStart = () => {
    return {
        type: 'MOST_SELL_START'
    };
};
export const mostSellSuccess = (data) => {
    return {
        type: 'MOST_SELL_SUCCESS',
        data

    };
};
export const mostSellError = (error) => {
    return {
        type: 'MOST_SELL_ERROR',
        error
    };
};
import axios from 'axios';

export const DownloadBestWriter = () => {
    return function (dispatch) {
        dispatch(bestwriterStart());
        
        axios.get('http://localhost:8000/api/sql/bestwriter/')
            .then(e => {
                const downdata = e.data.recordset;
               console.log('ffffffffffffffffffffffffffffff   ',downdata);
             dispatch(bestwriterSuccess(downdata));

            })
            .catch((err) => console.log('aldaaaa garlaaa', err));
    }
};


export const bestwriterStart = () => {
    return {
        type: 'BESTWRITER_START'
    };
};
export const bestwriterSuccess = (data) => {
    return {
        type: 'BESTWRITER_SUCCESS',
        data

    };
};
export const bestwriterError = (error) => {
    return {
        type: 'BESTWRITER_ERROR',
        error
    };
};
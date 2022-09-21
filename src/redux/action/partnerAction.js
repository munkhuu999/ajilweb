import axios from 'axios';

export const DownloadPartner = () => {
    return function (dispatch) {
        dispatch(partnerStart());
        
        axios.get('http://localhost:8000/api/sql/partner/')
            .then(e => {
                const downdata = e.data.recordset;
               console.log('ffffffffffffffffffffffffffffff   ',downdata);
             dispatch(partnerSuccess(downdata));

            })
            .catch((err) => console.log('aldaaaa garlaaa', err));
    }
};


export const partnerStart = () => {
    return {
        type: 'PARTNER_START'
    };
};
export const partnerSuccess = (data) => {
    return {
        type: 'PARTNER_SUCCESS',
        data

    };
};
export const bestwriterError = (error) => {
    return {
        type: 'PARTNER_ERROR',
        error
    };
};
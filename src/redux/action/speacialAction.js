import axios from 'axios';

export const DownloadAllSpBook = (paths) => {
    return function (dispatch) {
        dispatch(downloadStart());
        
        axios.get(`http://localhost:8000/api/sql/speicialbook/`)
            .then(e => {
                const downdata = e.data.recordset;
                // console.log(downdata);
                dispatch(DownloadAllSuccess(downdata));

            })
            .catch((err) => console.log('aldaaaa garlaaa', err));
    }
};


export const downloadStart = () => {
    return {
        type: 'DOWNLOAD_START'
    };
};
export const DownloadAllSuccess = (data) => {
    return {
        type: 'DOWNLOAD_SUCCESS',
        data

    };
};
export const DownloadAllError = (error) => {
    return {
        type: 'DOWNLOAD_ERROR',
        error
    };
};
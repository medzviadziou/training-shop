import {createSlice} from "@reduxjs/toolkit";


const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        mail: '',
        isMailLoading: false,// для отслеживания хода запроса
        isMailSendSuccess: false, // для отслеживания ошибки запроса
        isMailError: false, // для отслеживания ошибки запроса
    },
    reducers: {
        getMailFetch(state, action) {
            state.isMailSendSuccess = false;
            state.isMailError = false;
            state.mail = action.payload;
            state.isMailLoading = true;
        },
        getMailSuccess(state) {
            state.isMailError = false;
            state.isMailSendSuccess = true;
            state.isMailLoading = false;
            state.email = ""
        },
        getMailFailure(state) {
            state.isMailLoading = false;
            state.isMailSendSuccess = false;
            state.isMailError = true;
            state.email = ""
        },
    },
});

export const {getMailFetch, getMailSuccess, getMailFailure} = mailSlice.actions

export default mailSlice.reducer


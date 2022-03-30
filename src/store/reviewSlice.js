import {createSlice} from "@reduxjs/toolkit";


const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        review: {
            id: '',
            name: '',
            text: '',
            rating: 1,
        },
        isReviewLoading: false,// для отслеживания хода запроса
        isReviewSendSuccess: false, // для отслеживания ошибки запроса
        isReviewError: false, // для отслеживания ошибки запроса
    },
    reducers: {
        getReviewFetch(state, action) {
            state.isReviewSendSuccess = false;
            state.isReviewError = false;
            state.review = action.payload;
            state.isReviewLoading = true;
        },
        getReviewSuccess(state) {
            state.isReviewError = false;
            state.isReviewSendSuccess = true;
            state.isReviewLoading = false;
        },
        getReviewFailure(state) {
            state.isReviewLoading = false;
            state.isReviewSendSuccess = false;
            state.isReviewError = true;
        },
    },
});

export const {getReviewFetch, getReviewSuccess, getReviewFailure} = reviewSlice.actions

export default reviewSlice.reducer


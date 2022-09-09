import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
    user: {},
    contact: {}
};

// Actual Slice
export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setContactData(state, action) {
            state.contact.data = action.payload
        },
        setGetAllUserLoading(state, action) {
            state.user.getAllUserLoading = action.payload
        },
        setDeleteUserLoading(state, action) {
            state.user.deleteUserLoading = action.payload
        },
        setEditUserModal(state, action) {
            state.user.editUserModal = action.payload
        },
        setAddContactModal(state, action) {
            state.contact.addContactModal = action.payload
        },
        setEditContactModal(state, action) {
            state.contact.editContactModal = action.payload
        },
        setViewContactModal(state, action) {
            state.contact.viewContactModal = action.payload
        },
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.page,
            };
        },
    },
});

export const { setViewContactModal, setUserData, setGetAllUserLoading, setDeleteUserLoading, setEditUserModal, setAddContactModal, setContactData, setEditContactModal } = pageSlice.actions;

export default pageSlice.reducer;
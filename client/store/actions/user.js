// import { useRouter } from "next/router";
import client from "../../apollo-client";
// import { loginMutation } from "../../graphql/mutations/login";
// import { setAuthState, setAuthToken } from "../reducers/authSlice";
// import { GET_SAMPLE, SAMPLE_ERROR } from "../types";
// import { setCookie, deleteCookie } from 'cookies-next'
import Router from "next/router";
import { deleteUserMutation, getAllUsersQuery, registerMutation, updateUserMutation } from "../../graphql/queries/user";
import { setDeleteUserLoading, setGetAllUserLoading, setUserData } from "../reducers/pageSlice";


export const login = (variables, router) => async (dispatch) => {
    // try {
    //     console.log('vari', variables)
    //     const { data, errors } = await client.mutate({
    //         mutation: loginMutation,
    //         variables
    //     })
    //     if (errors && errors[0]?.message) {
    //         return console.error(errors)
    //     }
    //     console.log(data)
    //     dispatch(setAuthState(true));
    //     dispatch(setAuthToken(data?.login?.token))
    //     router.push('/');
    // } catch (error) {
    //     console.log(error)
    //     dispatch({
    //         type: SAMPLE_ERROR,
    //         payload: "error message",
    //     });
    // }
};

export const registerUser = variables => async dispatch => {
    try {
        console.log(variables);
        const result = await client.mutate({
            mutation: registerMutation,
            variables
        });
        console.log('resultresultresult', result)
        Router.push('/');
    } catch (error) {
        console.log(error)
    }
}

// export const logout = (variables, router) => async (dispatch) => {
//     deleteCookie('token');
//     dispatch(setAuthToken(false))
// }


export const getAllUsers = () => async dispatch => {
    try {
        dispatch(setGetAllUserLoading(true));
        const { data } = await client.query({
            query: getAllUsersQuery,
            fetchPolicy: "network-only"
        });
        dispatch(setUserData(data?.users))
        dispatch(setGetAllUserLoading(false));
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = id => async dispatch => {
    try {
        dispatch(setDeleteUserLoading(id))
        const { data } = await client.mutate({
            mutation: deleteUserMutation,
            variables: { id }
        });
        dispatch(setDeleteUserLoading(false));
        await dispatch(getAllUsers());
    } catch (error) {
        console.log(error)
    }
}

export const editUser = variables => async dispatch => {
    try {
        const result = await client.mutate({
            mutation: updateUserMutation,
            variables
        });
        await dispatch(getAllUsers());
    } catch (error) {
        console.log(error)
    }
}
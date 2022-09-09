import client from "../../apollo-client";
import { createContactMutation, deleteContactMutation, getAllContactsQuery, updateContactMutation } from "../../graphql/queries/contact";
import { setUserData } from "../reducers/authSlice";
import { setContactData } from "../reducers/pageSlice";

export const createContact = contact => async dispatch => {
    try {
        await client.mutate({
            mutation: createContactMutation,
            variables: { contact }
        });
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}
export const deleteContact = id => async dispatch => {
    try {
        await client.mutate({
            mutation: deleteContactMutation,
            variables: { id }
        });
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}
export const getAllContacts = (query) => async dispatch => {
    try {
        const { data } = await client.query({
            query: getAllContactsQuery,
            fetchPolicy: "network-only",
            variables: { query }
        });
        dispatch(setContactData(data?.getContacts))
    } catch (error) {
        console.log(error)
    }
}

export const updateContact = variables => async dispatch => {
    try {
        await client.mutate({
            mutation: updateContactMutation,
            variables
        });
        dispatch(getAllContacts());
    } catch (error) {
        console.log(error)
    }
}
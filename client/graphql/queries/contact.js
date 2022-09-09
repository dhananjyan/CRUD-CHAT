import { gql } from "@apollo/client";

export const getAllContactsQuery = gql`query GetContacts($query: String){
    getContacts(query: $query) {
      id
      firstName
      lastName
      email
      phoneNumber
      company
    }
  }`;

export const createContactMutation = gql`mutation AddContact($contact: ContactInput!) {
    addContact(contact: $contact) {
      id
      firstName
      lastName
      email
      phoneNumber
      company
    }
  }`;

export const deleteContactMutation = gql`mutation DeleteContact($id:String!) {
    deleteContact(id: $id) {
      id
    }
  }`;

export const updateContactMutation = gql`mutation UpdateConcact(
    $id: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $company: String!
  ) {
    updateContact(
      contact: {
        firstName: $firstName
        email: $email
        lastName: $lastName
        phoneNumber: $phoneNumber
        company: $company
      }
      id: $id
    ) {
      id
      firstName
      lastName
      email
      phoneNumber
      company
    }
  }`;
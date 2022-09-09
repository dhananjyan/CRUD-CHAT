import { gql } from "@apollo/client";

export const registerMutation = gql`mutation CreateUser($email:String, $firstName: String, $gender: String, $password: String, $phoneNumber: String, $lastName: String) {
    createUser(
      input: {email: $email, firstName: $firstName gender: $gender, password: $password, phoneNumber: $phoneNumber, lastName: $lastName}
    ) {
      token
    }
  }`;

export const getAllUsersQuery = gql`query GetAllUsers {
    users {
      id
      email
      firstName
      lastName
      phoneNumber
    }
  }`;

export const deleteUserMutation = gql`mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }`;

export const updateUserMutation = gql`  mutation UpdateUser($id: Int!, $email:String!, $firstName: String!, $phoneNumber: String!, $lastName: String!) {
    updateUser(input: {email: $email, firstName: $firstName, phoneNumber: $phoneNumber, lastName: $lastName, id: $id}) {
      id
    }
  }`;
import { gql } from "apollo-server-express";

export const typeDefs = gql`

  type Contact {
    id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    company: String
  }

  input ContactInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    company: String!
  }

  type Query {
    getContacts(query: String): [Contact]
    findAContact(id: String!): Contact
  }

  type Mutation {
    addContact(contact: ContactInput!): Contact
    deleteContact(id: String!): Contact
    updateContact(contact: ContactInput, id: String): Contact
  }
  
`;

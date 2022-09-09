// import { gql } from 'apollo-server-express';
import userType from './user/types';

const queryTypes = `

    type Query {
    _: Boolean
    }

    type Mutation {
    _: Boolean
    }
 `;

const combinedTypes = [
    userType,
    queryTypes,
];

export default combinedTypes;
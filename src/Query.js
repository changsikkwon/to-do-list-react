import { gql } from 'apollo-boost';

export const ALL_STATUS = gql`
    query {
        allStatus {
            statusName
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($account: String!, $password: String!) {
        createUser(account: $account, password: $password) {
            user {
                account
                password
            }
        }
    }
`;

export const AUTH_USER = gql`
    mutation authUser($account: String!, $password: String!) {
        authUser(account: $account, password: $password) {
            accessToken
        }
    }
`;

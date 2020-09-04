import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            number
            location
            name
            requests {
                _id
                title
                createdAt
                volunteerCount
                volunteers {
                    _id
                    createdAt
                    volunteerBody
                    username
                }
            }
        }
    }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      requests {
        _id
        title
        createdAt
        volunteerCount
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            email
        }
    }
`;

export const QUERY_REQUEST = gql`
    query request($id: ID!) {
        request(_id: $id) {
            _id
            title
            createdAt
            username
            volunteerCount
            volunteers {
                _id
                createdAt
                username
                volunteerBody
            }
        }
    }
`;

export const QUERY_REQUESTS = gql`
    query requests($username: String) {
        requests(username: $username) {
            _id
            title
            createdAt
            username
            volunteerCount
            volunteers {
                _id
                createdAt
                username
                volunteerBody
            }
        }
    }
`;
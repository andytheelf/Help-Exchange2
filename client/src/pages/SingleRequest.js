import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_REQUEST } from '../utils/queries';
import VolunteerList from '../components/VolunteerList';
import VolunteerForm from '../components/VolunteerForm';
import Auth from '../utils/auth';

function SingleRequest (props) {

  const { id: requestId } = useParams();

  const { loading, data } = useQuery(QUERY_REQUEST, {
    variables: { id: requestId }
  });
  
  const request = data?.request || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {request.username}
          </span>{' '}
          request on {request.createdAt}
        </p>
        <div className="card-body">
          <p>{request.title}</p>
        </div>
      </div>

      {request.volunteerCount > 0 && <VolunteerList volunteers={request.volunteers} />}
       {Auth.loggedIn() && <VolunteerForm requestId={request._id} />}
    </div>
  );
};

export default SingleRequest;
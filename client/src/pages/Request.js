import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import RequestList from '../components/RequestList';
import { QUERY_REQUESTS } from '../utils/queries';
import Auth from '../utils/auth';
import RequestForm from '../components/RequestForm';


function Home() {
    const loggedIn = Auth.loggedIn();
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_REQUESTS);
    const requests = data?.requests || [];
    console.log(requests);

    // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
    // const { data: userData } = useQuery(QUERY_ME);  

    return (
      <main>
        <div className='flex-row justify-space-between'>
          {loggedIn && (
            <div className="col-12 mb-3">
              <RequestForm/>
            </div>
          )}
          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading? (
            <div> Loading...</div>
          ):(
            <RequestList requests={requests} title="Requests here..."/>
          )}
          </div>
          {/* {loggedIn && userData ? (
            <div className="col-12 col-lg-3 mb-3">
              <FriendList
               username={userData.me.username}
               friendCount={userData.me.friendCount}
               friends={userData.me.friends}
              />
            </div>
          ) :null} */}
        </div>
      </main>
    );
  };


export default Home;


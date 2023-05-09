import React from "react";
import {useQuery} from '@apollo/client';
import gql from 'graphql';
import { GET_USERS } from "utils/queries";
import {Grid, Image} from "semantic-ui-react";
import ProfileCard from '../../components/Profiles'

function ProfilePage() {
    const {loading, data} = useQuery(GET_USERS);
    const userProfiles = data?.users || [];
  
    console.log(userProfiles);
  
    return (
      <div>
      <Grid columns={4}>
      <Grid.Row className="page-title">
        <h1>View Our Profiles</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading Posts...</h1>
        ) : (userProfiles && userProfiles.map(user => (
          <Grid.Column key = {user.id} style ={{marginBottom: 20}}>
            <ProfileCard post = {user}/>
          </Grid.Column>
        ))
        )}
      </Grid.Row>
      </Grid>
      </div>
    );
}

export default ProfilePage
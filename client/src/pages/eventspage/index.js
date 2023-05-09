import React, {useContext} from "react";
import {useQuery} from '@apollo/client';
import gql from 'graphql';
import { GET_EVENTS } from "utils/queries";
import {Grid, Image} from "semantic-ui-react";
import EventCard from '../../components/Event'
import { AuthProvider, AuthContext } from 'utils/auth';

function EventPage() {

    const {loading, data} = useQuery(GET_EVENTS);
    const events = data?.events || [];
    
    

    console.log(events);
  
    return (
      <div>
      <Grid columns={4}>
      <Grid.Row className="page-title">
        <h1>Upcoming Events</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading Posts...</h1>
        ) : (events && events.map(event => (
          <Grid.Column key = {event.id} style ={{marginBottom: 20}}>
            <EventCard post = {event}/>
          </Grid.Column>
        ))
        )}
      </Grid.Row>
      </Grid>
      </div>
    );
}

export default EventPage
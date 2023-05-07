import React from "react";
import {useQuery} from '@apollo/client';
import gql from 'graphql';
import { GET_EVENTS } from "utils/queries";
import {Grid, Image} from "semantic-ui-react";
import EventCard from '../../components/Event'

function HomePage() {
  const {loading, data} = useQuery(GET_EVENTS);
  const events = data?.events || [];

  console.log(events);

  return (
    <div>
    <Grid columns={3} divided>
    <Grid.Row>
      <h1>Recent Posts</h1>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      {loading ? (
        <h1>Loading Posts...</h1>
      ) : (events && events.map(event => (
        <Grid.Column key = {event.id} style ={{marginBottom: 20}}>
          <EventCard post = {event}/>
        </Grid.Column>
      ))
      )};
    </Grid.Row>
    </Grid>
    </div>
  );
}


export default HomePage;
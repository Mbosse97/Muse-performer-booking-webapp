import React from "react";
import {useQuery} from '@apollo/client';
import gql from 'graphql';
import { GET_EVENTS } from "utils/queries";
import {Grid, Image, Container, Header, Button, Icon, Segment, Divider, List} from "semantic-ui-react";
import EventCard from '../../components/Event'
import { Link } from 'react-router-dom';

function HomePage() {
  const {loading, data} = useQuery(GET_EVENTS);
  const events = data?.events || [];

  console.log(events);

  return (
    
    <Segment basic style={{paddingTop:0}}>
      <Segment text style={{backgroundColor: "#252930", textAlign:'center'}}>
        <Header
          as='h1'
          content='Welcome to Muse'
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <Header
          as='h2'
          content='Find events and performers near you'
          inverted
          style={{
            fontSize:'1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />
        <Button primary size='huge' as={Link} to= '/events'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Segment>
    <Container>
  
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Connect with Local Performers
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Find where your favourite performers are performing and book them in for your next event. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' as={Link} to='/profiles'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Become a Muse today
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Join our growing community of local performers and list your events for all to see
        </p>
        <Button as='a' size='large' primary>
          Register Now 
        </Button>
      </Container>
    </Segment>
    </Container>
    
    </Segment>
    
  );
}


export default HomePage;

    // <div>
    // <Grid columns={3} divided>
    // <Grid.Row>
    //   <h1>Recent Posts</h1>
    //   <Grid.Column>
    //     <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //   </Grid.Column>
    // </Grid.Row>
    // <Grid.Row>
    //   {loading ? (
    //     <h1>Loading Posts...</h1>
    //   ) : (events && events.map(event => (
    //     <Grid.Column key = {event.id} style ={{marginBottom: 20}}>
    //       <EventCard post = {event}/>
    //     </Grid.Column>
    //   ))
    //   )};
    // </Grid.Row>
    // </Grid>
    // </div>
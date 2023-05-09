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
    
    <Segment basic style={{paddingTop:0, width:'100% !important', height:'100vh'}}>
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
              "Testemonials"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a great App"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
               - Me
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              About Us
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We aim to create a platform for performers to be able to showcase their talents and promote thier events. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            
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
        <Button as={Link} to='/register' size='large' primary>
          Register Now 
        </Button>
      </Container>
    </Segment>
    </Container>


    </Segment>
    
  );
}


export default HomePage;
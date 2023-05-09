import React, {useContext} from "react";
import {useQuery} from '@apollo/client';
import gql from 'graphql';
import { GET_ME } from "utils/queries";
import {Grid, Image, Segment} from "semantic-ui-react";
import MyProfileCard from '../../components/MyProfileCard'
import { padding } from "@mui/system";
import { AuthContext } from "utils/auth";
import ProfileCard from "components/Profiles";
import AddEventButton from "components/AddEventButton";

function SingleProfilePage() {

    const {user, logout} =  useContext(AuthContext);

    console.log(user);

    const {loading, data} = useQuery(GET_ME);
    console.log(data)
    const [open, setOpen] = React.useState(false);

    const userProfile = data?.me || [];
  
    console.log(userProfile.events);
  
    return (
      <div>
        <Grid columns={3}>
          <Grid.Column width={16}>
          <Grid.Row className="page-title">
              <h1>My Profile</h1>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={4}>

            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

          </Grid.Column>



          <Grid.Column width={8}>
            <Segment> 
              <h2>Details</h2>
              <Segment vertical>
                  Name: {userProfile.firstName} {userProfile.lastName}
              </Segment>
              <Segment vertical>
                  Main Instrument: {userProfile.instrument}
              </Segment>
              <Segment vertical>
                  About Me: {userProfile.about}
              </Segment>
            </Segment>

            
          </Grid.Column>

          <Grid.Column width={4}>
            <Segment>
              <h4>Contact Information</h4>
              <Segment vertical>
                  Email: {userProfile.email}
              </Segment>
              <Segment vertical>
                  Phone: 
              </Segment>
              <Segment vertical>

              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Row style={{paddingTop:'5em', paddingBottom:'5em'}}>
            <Grid.Column width={13}>
              <h1>My Upcoming Events</h1>
            </Grid.Column>
             <AddEventButton style={{alignItems: 'right'}}/>
          </Grid.Row>
          <Grid.Row>
            {loading ? (
              <h1>Loading Events...</h1>
            ) : (userProfile && userProfile.events.map(event => (
              <Grid.Column key = {event.id} style ={{marginBottom: 20}}>
                <MyProfileCard post = {event}/>
              </Grid.Column>
            ))
            )}
          </Grid.Row>
        </Grid>
      </div>
    )
}

export default SingleProfilePage;

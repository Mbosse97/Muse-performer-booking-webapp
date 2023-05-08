import { from } from "@apollo/client";
import React from "react";
import {Segment, Container, Header, Grid, List} from 'semantic-ui-react'

function Footer() {
    return (     
        <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: "#252930", bottom:0}}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About Me' />
                <List link inverted>
                  <List.Item as='a'>Github</List.Item>
                  <List.Item as='a'>LinkedIn</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Additional Information
                </Header>
                <p>
                  For extra details on webpages functionalities, please visit the Github Repository here: <a href="https://github.com/Mbosse97/Muse-performer-booking-webapp"> https://github.com/Mbosse97/Muse-performer-booking-webapp </a>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>

    )
}

export default Footer;
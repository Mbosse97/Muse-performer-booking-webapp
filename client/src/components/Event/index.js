import React from "react";
import {Card, Icon, Label, Image, Modal, Button, Header} from 'semantic-ui-react'
import moment from "moment";
import { Link } from "react-router-dom";

function EventCard({post: {_id, performer, location, website, description, date} }){
  const [open, setOpen] = React.useState(false);

  return (
            <Card fluid>
              
                <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} style={{ cursor: 'pointer' }}/>}
                >
                <Modal.Header>{description}</Modal.Header>
                <Modal.Content image>
                  <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
                  <Modal.Description>
                    <Header>{performer}</Header>
                    <p>
                      Insert full event description here
                    </p>
                    <p> 
                      {location}
                    </p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button 
                    color='grey'
                    content='Visit Website' 
                    icon ='world'
                    onClick={()=> window.location.href = `www.${website}`}
                    />
                  <Button
                    content="View Profile"
                    labelPosition='right'
                    icon='user'
                    onClick={() => setOpen(false)}
                    positive
                  />
                </Modal.Actions>
                </Modal>
              
              <Card.Content>
                <Card.Header>{performer}</Card.Header>
                <Card.Meta>
                  <span className='date'>{date}</span>
                </Card.Meta>
                <Card.Description>
                  {description}.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  {location}
                </a>
              </Card.Content>
            </Card>
    )
}

export default EventCard;
  


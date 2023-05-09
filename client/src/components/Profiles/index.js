import React from "react";
import {Card, Icon, Label, Image, Modal, Button, Header} from 'semantic-ui-react'
import moment from "moment";
import { Link } from "react-router-dom";

function ProfileCard({post: {_id, firstName, lastName, instrument, email, about, performerName} }){
  const [open, setOpen] = React.useState(false);

  return (
            <Card fluid>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} style={{ cursor: 'pointer' }}/>}
                >
                <Modal.Header>{firstName} {lastName}</Modal.Header>
                <Modal.Content image>
                  <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
                  <Modal.Description>
                    <Header>{performerName}</Header>
                    <p>
                      About Me: {about}
                    </p>
                    <p> 
                      Contact me: {email}
                    </p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    content="Back"
                    onClick={() => setOpen(false)}
                    secondary
                  />
                </Modal.Actions>
                </Modal>
  
              <Card.Content>
                <Card.Header>{performerName}</Card.Header>
                <Card.Meta>
                  <span className='date'>{instrument}</span>
                </Card.Meta>
                <Card.Description>
                  {about}.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  <p>{firstName} {lastName}</p>
                  {email}
                </a>
              </Card.Content>
            </Card>
    )
}

export default ProfileCard;
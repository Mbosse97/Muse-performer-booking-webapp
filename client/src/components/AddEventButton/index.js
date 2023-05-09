import React, { useContext, useState } from "react";
import { Form, Button, Modal, Header, Image} from "semantic-ui-react"
import { CREATE_EVENT } from "utils/mutations";
import { useMutation } from "@apollo/client";
import gql from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from "utils/auth";

function AddEventButton(props) {
    const [open, setOpen] = React.useState(false)
    const context = useContext(AuthContext);

    const [values, setValues] = useState({
        performer: "",
        instrument: "",
        location: "",
        website: "",
        description: "",
        date: ""
    });

    const [createEvent, {loading}] = useMutation(CREATE_EVENT, {
        update(proxy, {data: {register: userData}}){
            console.log(userData)
            context.login(userData)
        },

        variables: values
    });

    const onChange = (event) => {
        const {name, value} = event.target;

        setValues({...values, [name]: value});
    };


    const onSubmit = async (event) => {
        console.log(values);

        await createEvent();
    }



    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button positive>Add Event</Button>}
                >
                <Modal.Header>Create your next event</Modal.Header>

                <Modal.Content>
                <Form 
                    onSubmit = {onSubmit} 
                    style={{display:'flex', flexDirection:'column', alignItems:'center'}} 
                    noValidate className={loading ? "loading" : ''}
                >
                    <h1 className='page-title'>Enter Your Event Details</h1>
                    <Form.Input
                        label="Location"
                        placeholder="Location"
                        name="location"
                        value={values.location}
                        onChange={onChange} 
                    />
                    <Form.Input
                        label="Description"
                        placeholder="Description"
                        name="description"
                        type='text'
                        value={values.description}
                        onChange={onChange} 
                    />
                    <Form.Input
                        label="Website"
                        placeholder="Website"
                        name="website"
                        type='text'
                        value={values.website}
                        onChange={onChange} 
                    />
                    <Form.Input
                        label="Date"
                        placeholder="Date"
                        name="date"
                        type='test'
                        value={values.date}
                        onChange={onChange} 
                    />
                    <Button type='submit' primary>
                            Register
                    </Button >
                
                </Form> 
                </Modal.Content>

                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                    Back
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default AddEventButton

{/* <Modal.Description>
<Header>Default Profile Image</Header>
<p>
    We've found the following gravatar image associated with your e-mail
    address.
</p>
<p>Is it okay to use this photo?</p>
</Modal.Description> */}
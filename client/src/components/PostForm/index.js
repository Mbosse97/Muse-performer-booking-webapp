import React from "react";
import { Form } from "semantic-ui-react";

import {useForm} from 

function EventForm(){
    const {values, onChange, onSubmit} = useForm(createPostCallback, {
        
    })

    return (
        <Form onSubmit={onSubmit}>
            <h2>Create an Event</h2>
            <Form.Field>
                <Form.Input 
                placeholder ="Hello"
                name="Description"
                onChange={onChange}
                value={values.descrition}
                />
                <Button type = "submit" color='teal'>
                    Submit
                </Button>
            </Form.Field>
        </Form>
    )
}

export default EventForm

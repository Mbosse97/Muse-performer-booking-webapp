import React from "react";
import { Button, Form } from "semantic-ui-react";
import { CREATE_EVENT } from "utils/mutations";
import { useMutation } from "@apollo/client";


function EventForm(){
    // const {values, onChange, onSubmit} = useForm(createPostCallback, {

    // })

    const [values, setValues] = useState({
        location: "",
        website: "",
        description: "",
        dateCreated: "",
        date: ""
    });

    const [createEvent, {error} ] = useMutation(CREATE_EVENT, {
        variables: values,
        update(_,result){
            console.log(result)
            values.location = ''

        }
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

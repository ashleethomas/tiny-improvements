import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to</Label>
            <Input
                type="select"
                value={props.receiver}
                onChange={props.updateReceiver}>
                {props.username}

            </Input>
        </FormGroup>
        <FormGroup>
            <Input
                type="text"
                placeholder="Kudos Title"
                value={props.kudosTitle}
                onChange={props.updateKudosTitle}
            />
        </FormGroup>
        <FormGroup>
            <Input
                type="textarea"
                placeholder="Kudos Text"
                value={props.kudosText}
                onChange={props.updateKudosText}
            />
        </FormGroup>

        <FormGroup>
            <Label>Sender</Label>
            <Input
                type="select"
                value={props.sender}
                onChange={props.updateSender}>
                {props.username}

            </Input>
        </FormGroup>
    </Form>
)

export default KudosForm;
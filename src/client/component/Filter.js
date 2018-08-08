import React from "react";
import { Input, Button, Label, FormGroup, Form } from "reactstrap";

const Filter = props => (

    <Form>
        <FormGroup>

            <Input type="select" onChange={props.updatefilter}>
                <option>Please select a filter!</option>
                {props.filteruser}
            </Input>
        </FormGroup>
    </Form >


)
export default Filter;
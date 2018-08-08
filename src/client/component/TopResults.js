import React from "react";
import { Input, Button, Label, FormGroup, Form } from "reactstrap";

const TopResults = props => (

    <Form>
        <FormGroup>
            <Label>Top 3 Users with the most Kudos </Label>
            <Button color="success" onClick={props.getresults}>Leaderboard!</Button>

        </FormGroup>
    </Form >


)
export default TopResults;
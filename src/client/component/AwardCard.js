import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";


const AwardCard = props => (
    <Card>
        <CardBody className="mx-auto">
            <img alt="award" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRtA7V2zw9zKSDstk9bx0PfU16-F_bXcSXRJ7eQCT1ZM3b-cG" width="50px" />
            <p>Badge Name</p>
            <img alt="avatar" src="https://previews.123rf.com/images/scotttalent/scotttalent1312/scotttalent131200439/24305972-hang-loose-hand-signal.jpg" width="100px" />
            <h2> {props.name} </h2>
            <p>{props.comment} </p>
            <h6>Receiver:{" "}{props.receiver} </h6>
            <p>Sender: {" "} {props.sender} </p>

        </CardBody>
    </Card>
)
export default AwardCard;

// https://www.iranketab.ir/Images/user.jpg

// http://www.pngmart.com/files/3/Award-PNG-Photos.png
import React from "react";

const AwardCard = props => (
    <div>
        <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
        <p>Badge Name</p>
        <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
        <h6>{props.receiver} </h6>
        <h2> {props.name} </h2>
        <p>{props.comment} </p>

    </div>
)
export default AwardCard;
import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Input, Label } from "reactstrap";
import AwardCard from './component/AwardCard';
import KudosForm from './component/KudosForm';

class App extends Component {

  constructor() {
    super();

    this.state = {

      users: [
        {
          name: "Alia",
          userId: 10457,
          position: "Solutions Engineer"
        },
        {
          name: "Cody",
          userId: 10850,
          position: "Senior Functional Consultant"
        },
        {
          name: "Ana",
          userId: 10222,
          position: "Lead Solutions Engineer"
        },
        {
          name: "Leon",
          userId: 24810,
          position: "King of All Solution Architects"

        }
      ],
      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us.",
          sender: "Fabien",
          receiver: "Leon"
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Laura makes it to work as often as she does.",
          sender: "Archit",
          receiver: "Laura"
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee.",
          sender: "Gobi",
          receiver: "Owen"
        }
      ]
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Button color="success">Give Kudos</Button>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(award => <AwardCard name={award.title} comment={award.comment} receiver={award.receiver} />)}
          </Col>
        </Row>
        {/* New code goes below*/}
        <Row>
          <Col md="12">
            <KudosForm username={this.state.users.map(ele => <option>{ele.name}</option>)} />
          </Col>
        </Row>

      </Container>

    );
  }
}
export default App;
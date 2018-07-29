import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Input, Label, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AwardCard from './component/AwardCard';
import KudosForm from './component/KudosForm';
import axios from "axios";

class App extends Component {

  state = {

    users: [],
    awards: [],
    kudosText: "",
    kudosTitle: "",
    receiver: "",
    sender: "",
    modal: false
  }

  toggle = this.toggle.bind(this)

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  updateKudosText = event => {
    this.setState({ kudosText: event.target.value })

  }

  updateKudosTitle = event => {
    this.setState({ kudosTitle: event.target.value })
  }

  updateReceiver = event => {
    this.setState({ receiver: event.target.value })
  }
  updateSender = event => {
    this.setState({ sender: event.target.value })
  }


  postData = () => {
    axios.post("/api/kudos", {

      title: this.state.kudosTitle,
      comment: this.state.kudosText,
      receiver: this.state.receiver,
      sender: this.state.sender
    })
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  }
  componentDidMount = () => {
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

    axios.get("/api/users")
      .then(response => {
        this.setState({
          users: response.data
        })
      })

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
            <Card>
              <CardBody className="mx-auto">
                <Button color="success" onClick={this.toggle}>Give Kudos</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>Kudos</ModalHeader>
                  <ModalBody>
                    <KudosForm
                      username={this.state.users.map((ele, index) => < option key={index}> {ele.name} </option>)}
                      postData={this.postData}
                      kudosText={this.state.kudosText}
                      updateKudosText={this.updateKudosText}
                      kudosTitle={this.state.kudosTitle}
                      updateKudosTitle={this.updateKudosTitle}
                      receiver={this.state.receiver}
                      updateReceiver={this.updateReceiver}
                      sender={this.state.sender}
                      updateSender={this.updateSender}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postData}>Give Kudos</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map((award, index) => <AwardCard key={index} name={award.title} comment={award.comment} receiver={award.receiver} sender={award.sender} />)}
          </Col>
        </Row>

      </Container>

    )
  }
}
export default App;
import React, { Component } from "react";
import { Alert, Col, Container, Row, Button, Form, FormGroup, Input, Label, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup, Progress } from "reactstrap";
import AwardCard from './component/AwardCard';
import KudosForm from './component/KudosForm';
import Filter from './component/Filter';
import TopResults from './component/TopResults';
import axios from "axios";

let container = {
  backgroundImage:
    "url(https://images.pexels.com/photos/248840/pexels-photo-248840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  height: "300"
};

class App extends Component {

  state = {

    users: [],
    awards: [],
    kudosText: "",
    kudosTitle: "",
    receiver: "",
    sender: "",
    filterUser: "",
    topResults: [],
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
  };

  updateFilter = event => {
    this.setState({ filterUser: event.target.value });
  };

  getFilter = () => {
    axios.get("/api/filter/" + this.state.filterUser)
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  };


  getResults = () => {
    axios.get("/api/results/")
      .then(response => {
        this.setState({
          topResults: response.data

        })
      })
  };
  reset = () => {
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

  }



  postData = () => {
    axios.post("/api/kudos", {

      Name: this.state.kudosTitle,
      Comment__c: this.state.kudosText,
      Receiver__c: this.state.users.find(user => user.name === this.state.receiver).id,
      Sender__c: this.state.users.find(user => user.name === this.state.sender).id
    })
      .then(response => {
        // this.setState({
        //   awards: response.data
      })
    this.toggle()
  };
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
          users: response.data,
          receiver: response.data[0].name,
          sender: response.data[0].name
        })
      })

  }
  render() {
    return (
      <div style={container}>
        <Container>
          <Row>
            <Col md="6">
              <br />
              <Alert color="light"><h2 className="text-info">Ohana Hang Loose Board
              <img alt="board" src="https://previews.123rf.com/images/ylivdesign/ylivdesign1703/ylivdesign170300804/73224342-seascape-with-palm-trees-and-surfboard-isometric-icon-3d-on-a-transparent-background-vector-illustra.jpg" width="50px" />
              </h2></Alert>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <Card>
                <CardBody>
                  <Label>Submit a New Kudo</Label>
                  <br />
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
                      <Button color="success" onClick={this.postData}>Give Kudos</Button>
                      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardBody>
                  <TopResults
                    getresults={this.getResults}
                  />
                  {this.state.topResults.map(e => <h1 size="lg"> <Progress style={{ transform: [{ scaleX: 1.0 }, { scaleY: 4 }], height: 45, fontSize: 16 }} color="info" value={e.expr0} max="18">{e.name}{" - "}{e.expr0} Kudos</Progress></h1>)}

                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardBody>
                  <Label>Filter Kudos by Receiver</Label>
                  <br />
                  <Filter
                    filteruser={this.state.users.map(elem => <option>{elem.name} </option>)}
                    updatefilter={this.updateFilter}
                    getfilter={this.getFilter}
                  />
                  <Button color="success" onClick={this.getFilter}>Filter</Button>
                  {"   "}
                  <Button color="success" onClick={this.reset}>Reset</Button>

                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="12" className="text-center">
              <Alert color="light"><h3 className="text-info"> All Kudos</h3></Alert>
            </Col>
          </Row>
          <Row>
            {this.state.awards.map((award, index) => <Col md="4"> <AwardCard key={index} name={award.name} comment={award.comment__c} receiver={award.receiver__r.Name} sender={award.sender__r.Name} /></Col>)}
          </Row>

        </Container >
      </div >
    )
  }
}
export default App;
import { React, useState } from "react";
import "./profile.css";
import {
  Accordion,
  Card,
  Table,
  Button,
  Modal,
    AccordionCollapse,
  CloseButton,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Profile() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div >
      <div className="intro">
        <Card style={{ width: "25rem", margin: "0rem", maxHeight: "95vh" }}>
          <Card.Img
            variant="top"
            src="http://vvekslab.in/bibekpic1.jpg"
            style={{
              paddingTop: "1.5rem",
              paddingBottom: "0rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          />
          <Card.Body>
            <Card.Title>Vivek</Card.Title>
            <Card.Text>
              <Table striped bordered hover size="sm" style={{ width: "auto" }}>
                <tbody>
                  <tr>
                    <td>E-mail</td>
                    <td> vivek.iitian@gmail.com </td>
                  </tr>
                  <tr>
                    <td>Skype</td>
                    <td>vivekiit</td>
                  </tr>

                  <tr>
                    <td>Tel</td>
                    <td>+91-661-246-2685</td>
                  </tr>

                  <tr>
                    <td>Office/Lab</td>
                    <td>MN-342 (Second Floor)</td>
                  </tr>

                  <tr>
                    <td>Address</td>
                    <td colSpan="2">
                      RNAi & Functional Genomics Lab. <br></br>
                      Department of Life Science <br></br>
                      National Institute of Technology, Rourkela <br></br>
                      Rourkela - 769 008<br></br>
                      Odisha, INDIA
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="links">
                <Button variant="outline-warning">
                  <a href="#"> CV </a>
                </Button>

                <Button variant="outline-warning">
                  <a href="#"> IBINS </a>
                </Button>

                <Button variant="outline-warning">
                  <a href="#"> ORCID </a>
                </Button>

                <Button variant="outline-warning">
                  <a href="#"> PUBLONS </a>
                </Button>

                <Button variant="outline-warning" id="googleScholar">
                  <a href="#"> GOOGLE SCHOLAR </a>
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="right">
          <div className="name">
            <h1>Vivekananda Mallick </h1>
            <h3>
              Principal Investigator <br></br>
              RNAi Laboratory , National Institute of Technology Rourkela
            </h3>
          </div>
          <div className="biography">
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            atque ex ut esse in et libero velit. Commodi deleniti adipisci, a
            facere tempora, minima iure autem omnis voluptatibus officiis
            soluta! Alias quisquam accusamus odio nesciunt incidunt, maxime
            soluta corporis, quibusdam sed quam placeat nisi assumenda libero
            exercitationem adipisci fugit praesentium cum dicta? Vero magni
            odit, cupiditate neque tenetur nobis numquam deserunt tempora,
            voluptas enim ad similique sint placeat ut reiciendis inventore
            rerum commodi blanditiis reprehenderit cumque sapiente? Sint, dolor
            vel? Aut, iure vero soluta consectetur autem sequi veritatis
            doloremque. Ex alias iste unde tempora voluptate atque ad iure rem
            maiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Deserunt dolores itaque excepturi, ipsam quibusdam pariatur nisi
            saepe nihil? Ipsa eos voluptatibus omnis, quam ea qui fuga doloribus
            totam. Alias magnam, sit quae adipisci sequi saepe, odit repudiandae
            eum ut voluptatum quasi ex, corrupti soluta deleniti dolores
            provident nihil consectetur vitae? <hr />
          </div>

          <div className="popups">
            <Button
              onClick={() => setModalShow(true)}
              style={{ width: "10rem", textAlign: "center", margin: "1rem" }}
            >
              TIMELINE
            </Button>
            <Button
              onClick={() => setModalShow(true)}
              style={{ width: "10rem", textAlign: "center", margin: "1rem" }}
            >
              Secondary
            </Button>
            <Button
              variant="success"
              style={{ width: "10rem", textAlign: "center", margin: "1rem" }}
              onClick={() => setModalShow(true)}
            >
              Success
            </Button>
            <Button
              variant="warning"
              style={{ width: "10rem", textAlign: "center", margin: "1rem" }}
              onClick={() => setModalShow(true)}
            >
              Warning
            </Button>
            <Button
              variant="danger"
              style={{ width: "10rem", textAlign: "center", margin: "1rem" }}
              onClick={() => setModalShow(true)}
            >
              Danger
            </Button>

            <OpenTimeline show={modalShow} onHide={() => setModalShow(false)} />
          </div>

          {/* <div className="otherInfo">
            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  style={{ textAlign: "center" }}
                >
                  TIMELINE
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  style={{ textAlign: "center" }}
                >
                  SPONSERED PROJECTS
                </Accordion.Toggle>

                <Accordion.Collapse
                  eventKey="1"
                  style={{ textAlign: "center" }}
                >
                  <Card.Body
                    style={{
                      width: " 50vw",
                    }}
                  >
                    LIST OF ALL SPONDERED PROJECTS
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  style={{ textAlign: "center" }}
                >
                  SPONSERED PROJECTS
                </Accordion.Toggle>

                <Accordion.Collapse
                  eventKey="2"
                  style={{ textAlign: "center" }}
                >
                  <Card.Body>LIST OF ALL SPONDERED PROJECTS</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="3"
                  style={{ textAlign: "center" }}
                >
                  AWARDS
                </Accordion.Toggle>

                <Accordion.Collapse
                  eventKey="3"
                  style={{ textAlign: "center" }}
                >
                  <Card.Body>LIST OF ALL AWARDS</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="4"
                  style={{ textAlign: "center" }}
                >
                  HONORS
                </Accordion.Toggle>

                <Accordion.Collapse
                  eventKey="4"
                  style={{ textAlign: "center" }}
                >
                  <Card.Body>LIST OF ALL HONORS</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="5"
                  style={{ textAlign: "center" }}
                >
                  PROFESSIONAL MEMBERSHIP
                </Accordion.Toggle>

                <Accordion.Collapse
                  eventKey="5"
                  style={{ textAlign: "center" }}
                >
                  <Card.Body>LIST OF ALL PROFESIONAL MEMBERSHIP</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="6"
                  style={{ textAlign: "center" }}
                >
                  TEACHING
                </Accordion.Toggle>

                <Accordion.Collapse
                  eventKey="6"
                  style={{ textAlign: "center" }}
                >
                  <Card.Body>LIST OF ALL TEACHING ROLES</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;

function TimeLine() {
  return (
    <div>
      <>
        <div className="container" style={{ width: " 100%", height: " 80%" }}>
          <div className="row">
            <div>
              <div className="main-timeline">
                <div className="timeline">
                  <div className="timeline-icon">
                    <span className="year">2018</span>
                  </div>
                  <div className="timeline-content">
                    <h3
                      className="title"
                      style={{ backgroundColor: "transparent" }}
                    >
                      Web Desginer
                    </h3>
                    <p
                      className="description"
                      style={{   backgroundColor:"transparent"}}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Praesentium consequuntur, sunt, cum voluptate illo iure
                      dolor fugiat repellat iste blanditiis voluptatibus quia
                      officia esse, ipsam totam ex magni deserunt facilis! Natus
                      dolorem nemo minima quia perferendis at eveniet non
                      inventore, delectus rem praesentium suscipit aliquam vero
                      eaque dicta? Omnis, molestiae.
                    </p>
                  </div>
                </div>

                <div className="timeline">
                  <div className="timeline-icon">
                    <span className="year">2018</span>
                  </div>
                  <div className="timeline-content">
                    <h3
                      className="title"
                      style={{ backgroundColor: "transparent" }}
                    >
                      Web Desginer
                    </h3>
                    <p
                      className="description"
                      style={{ backgroundColor: "transparent" }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Praesentium consequuntur, sunt, cum voluptate illo iure
                      dolor fugiat repellat iste blanditiis voluptatibus quia
                      officia esse, ipsam totam ex magni deserunt facilis! Natus
                      dolorem nemo minima quia perferendis at eveniet non
                      inventore, delectus rem praesentium suscipit aliquam vero
                      eaque dicta? Omnis, molestiae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

function OpenTimeline(props) {
  return (
    <Modal
      {...props}
      size="xl"
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={{ backgroundColor: "red"}}>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TimeLine />
      </Modal.Body>
    </Modal>
  );
}

function OpenSponseredProjects(props) {
  return (
    <Modal
      {...props}
      size="xl"
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TimeLine />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function OpenAwards(props) {
  return (
    <Modal
      {...props}
      size="xl"
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TimeLine />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function OpenHonors(props) {
  return (
    <Modal
      {...props}
      size="xl"
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TimeLine />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function OpenProfessionalMembership(props) {
  return (
    <Modal
      {...props}
      size="xl"
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TimeLine />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function OpenTeaching(props) {
  return (
    <Modal
      {...props}
      size="xl"
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TimeLine />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

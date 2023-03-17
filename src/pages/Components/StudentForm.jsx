import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Assest/Style.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Success from "../Images/96673-success.gif";

function StudentForm() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uskafun",
        "template_t450vuo",
        form.current,
        "ivKItVln0cZrmho0T"
      )
      .then(
        (result) => {
          handleShow1();
        },
        (error) => {
          console.log("Error", error.text);
        }
      );

    handleClose();
  };

  return (
    <>
      <Button
        variant="light"
        className="item2 view-more rounded-pill navbar-btn"
        onClick={handleShow}
      >
        Register
      </Button>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Title className="heading">
          <Modal.Header closeButton className="heading">
            Registration Form
          </Modal.Header>
        </Modal.Title>
        <Modal.Body className="mBody">
          <Form className="sForm" ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-2" controlid="formBasicName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                required
                className="input-form rounded-pill"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlid="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
                className="input-form rounded-pill"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlid="formBasicNumber">
              <Form.Control
                type="number"
                name="phone"
                placeholder="PhoneNumber"
                required
                className="input-form rounded-pill"
              />
            </Form.Group>

            <Form.Group className="mb-2" controlid="formBasicDegree">
              <Form.Control
                type="text"
                name="degree"
                placeholder="Degree and Department"
                required
                className="input-form rounded-pill"
              />
            </Form.Group>

            <Form.Group className="mb-2" controlid="formBasicDegree">
              <Form.Control
                type="number"
                name="year"
                placeholder="Year of Studying"
                min="1"
                max="4"
                required
                className="input-form rounded-pill"
              />
            </Form.Group>
            <Form.Group className="btn-grp">
              <Button
                type="submit"
                className="close mt-3 butn submit-btn rounded-pill"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={show1} onHide={handleClose1} className="modal">
        <Modal.Body>
          <div className="successfully-registered">
            <div className="gif-holder">
              <div className="gif">
                <img src={Success} alt="" className="img-fluid" />
              </div>
            </div>
            <h1 className="mail-sent">Registered Successfully</h1>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="center-block d-block mx-auto success-close rounded-pill"
            onClick={handleClose1}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentForm;

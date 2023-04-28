import React, { useState } from "react";
import "./Modal.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function ContactMe() {
  return (
    <div className="mainCard">
      <Card style={{ width: "18rem" }} className="Card">
        <ListGroup>
          <h3 style={{ textAlign: "center", margin: "0.4em" }}>Contact Me</h3>
          <ListGroupItem>
            <p className="m-1">First Name</p>
            <input className="form-control" type="text" placeholder="" />
          </ListGroupItem>
          <ListGroupItem>
            <p className="m-1">Last Name</p>
            <input className="form-control" type="text" placeholder="" />
          </ListGroupItem>
          <ListGroupItem>
            <p className="m-1">Phone Number</p>
            <input className="form-control" type="text" placeholder="" />
          </ListGroupItem>
          <ListGroupItem>
            <p className="m-1">Email address</p>
            <input className="form-control" type="text" placeholder="" />
          </ListGroupItem>
        </ListGroup>
        <div style={{ margin: "0 auto" }}>
          <button className="btn btn-success m-2">send request</button>
        </div>
      </Card>
    </div>
  );
}

export default ContactMe;

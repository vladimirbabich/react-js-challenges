import React from "react";
import { Row, Button } from "react-bootstrap";

export function ListItem({ item, deleteCallback }) {
  return (
    <Row>
      <div className="container border border-secondary rounded-2 w-100 p-0">
        <div className="row m-0 p-0">
          <div
            className="d-flex justify-content-between p-1"
            style={{ alignItems: "center" }}
            key={item[2]}
          >
            <b>{item[0]}</b>
            <Button onClick={(e) => deleteCallback(e, item[2])}>Delete</Button>
          </div>
        </div>
        <span className="d-flex justify-content-start p-1">{item[1]}</span>
      </div>
    </Row>
  );
}

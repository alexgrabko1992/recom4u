import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "react-rating";

export const Review = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.content.img} />
      <Card.Body>
        <Card.Title>{props.content.title}</Card.Title>
        <Card.Text>{props.content.info}</Card.Text>
        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          initialRating={props.content.rating}
          readonly={true}
        />
      </Card.Body>
    </Card>
  );
};

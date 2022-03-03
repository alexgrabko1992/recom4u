import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "react-rating";

export const CreateReview = () => {
  const [validated, setValidated] = useState(false);
  const [image, setImage] = useState();
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [rating, setRating] = useState();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    event.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async function () {
      const base64 = reader.result.split(",")[1];
      console.log(base64);
      const response = await fetch("/api/review/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ data: base64 }),
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse.display_url);
      setImg(jsonResponse.display_url);
    };

    setTimeout(async () => {
      const response = await fetch(
        "/api/review/create-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            title,
            info,
            img,
            rating,
          }),
        }
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }, 1000);

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="title" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          onChange={({ target }) => setTitle(target.value)}
        />
      </Form.Group>
      <Form.Select aria-label="Default select example" className="mb-2">
        <option>Open this select menu</option>
        <option value="1">Book</option>
        <option value="2">Film</option>
        <option value="3">Game</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          required
          onChange={({ target }) => setInfo(target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control
          type="file"
          required
          onChange={({ target }) => setImage(target.files[0])}
        />
      </Form.Group>
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        onClick={(value) => setRating(value)}
      />
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

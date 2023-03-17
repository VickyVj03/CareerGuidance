import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Google() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    alert("ThankYou For Your Rating!!!");

    // other logic
  };

  const handleSubmit = () => {};

  const handleChange = () => {};

  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  return (
    <div className="rating mb-3">
      <div className="container">
        <div className="row">
          <div className="col-6 review">
            <h2>Your Rating </h2>
            <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
              /* Available Props */
            />
          </div>
          <div className="col-6  review">
            <Form>
              <h3>Your Reviews</h3>
              <textarea
                placeholder="  Enter your review here!!!"
                cols="40"
                className="reviewArea mb-3"
              ></textarea>
              <br />
              <Button className="btn btn-success btn-sm mb-1">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Google;

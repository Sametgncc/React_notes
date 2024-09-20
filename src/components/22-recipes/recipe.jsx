import React from "react";
import { Badge, Card, CardBody, CardTitle } from "react-bootstrap";
import { LuChefHat } from "react-icons/lu";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Recipe = (props) => {
  const { name, image, cuisine, rating } = props;

  const score = (Math.round(rating));

  const starsFull = [...new Array(score)].map((_,index) => (<FaStar key={index} />));
  const starsEmpty = [...new Array(5 - score)].map((_,index) => ( <FaRegStar key={index}/>
  ));

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <div className="text-secondary">
          {" "}
          {starsFull}
          {starsEmpty}
        </div>
        <Badge bg="success" className="position-absolute top-0 end-0 ">
          <LuChefHat /> {cuisine}
        </Badge>
        <Badge bg="warning" className="position-absolute bottom-0 end-0">
          {rating}
        </Badge>
      </CardBody>
    </Card>
  );
};

export default Recipe;

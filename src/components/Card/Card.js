import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./Card.css";

const Item = ({ data }) => (
	<Card className="cardContainer">
		<Card.Img className="cardImage" src={data.image} />
		<Card.Body className="cardBody">
			<Card.Title className="cardTitle">{data.title}</Card.Title>
			<Card.Text className="cardPrice">$ {data.price}</Card.Text>
			<Link to={`/${data.id}`} style={{ textDecoration: "none" }}>
				<Button className="cardVerMas">Ver más detalles</Button>
			</Link>
		</Card.Body>
	</Card>
);

export default Item;

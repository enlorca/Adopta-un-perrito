import "bootstrap/dist/css/bootstrap.min.css";
import Tags from "./Tags";
import Card from "react-bootstrap/Card";

const MyCard = ({
  nombre = "Nombre_default",
  desc = "Descripcion_default",
  image = "https://placedog.net/300/200",
  color = "success",
  texto = "badge_default",
}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <Tags color={color} texto={texto}></Tags>
      </Card>
    </>
  );
};

export default MyCard;

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PlayerJS(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{playerName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{team}</ListGroup.Item>
          <ListGroup.Item>{nationality}</ListGroup.Item>
          <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
          <ListGroup.Item>{age} years old.</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default PlayerJS;

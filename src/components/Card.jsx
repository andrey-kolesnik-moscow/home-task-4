import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function OneCard({ user }) {
  return (
    <Card className="">
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <h5>
          <Link to={{ pathname: `/post/${user.id}` }}>{user.title}</Link>
        </h5>
        <Card.Text>{user.text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center">{user.createdAt}</Card.Footer>
    </Card>
  );
}

export default OneCard;

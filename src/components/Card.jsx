import Card from 'react-bootstrap/Card';

function OneCard({ user }) {
  return (
    <Card className="">
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <h5>
          <a href={`/post/${user.id}`} className="">
            {user.title}
          </a>
        </h5>
        <Card.Text>{user.text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center">{user.createdAt}</Card.Footer>
    </Card>
  );
}

export default OneCard;

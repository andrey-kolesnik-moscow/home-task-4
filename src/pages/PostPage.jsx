import React from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader.jsx';

import { Link } from 'react-router-dom';

function PostPage(props) {
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [comments, setComments] = React.useState([]);
  const [input, setInput] = React.useState('');

  const name = 'Супертестировщик';

  function loadUser() {
    try {
      const apiUrl = `https://5c3755177820ff0014d92711.mockapi.io/posts/${props.match.params.number}`;
      axios.get(apiUrl).then((resp) => {
        const data = resp.data;
        setUser(data);
        setIsLoading(false);
      });
    } catch {
      console.log('Page data downloading has failed!');
    }
  }

  function loadComments() {
    try {
      const apiCommentsUrl = `https://5c3755177820ff0014d92711.mockapi.io/posts/${props.match.params.number}/comments`;
      axios.get(apiCommentsUrl).then((resp) => {
        const data = resp.data;
        setComments(data);
      });
    } catch {
      console.log('Comments data downloading has failed!');
    }
  }

  function postComment() {
    try {
      const apiCommentsUrl = `https://5c3755177820ff0014d92711.mockapi.io/posts/${props.match.params.number}/comments`;
      axios
        .post(apiCommentsUrl, {
          name,
          text: input,
        })
        .then(() => {
          loadComments();
          setInput('');
        });
    } catch {
      console.log('Your comment wasn`t send to the server!');
    }
  }

  React.useEffect(() => {
    loadUser();
    loadComments();
    // eslint-disable-next-line
  }, [props.match.params.number]);

  return (
    <div className="container">
      <br />
      <br />
      <Link to={{ pathname: '/' }}>
        <Button variant="primary">Назад</Button>
      </Link>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Card className="mt-4">
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
              <h5>
                <Link to={{ pathname: `${window.location.pathname}` }}>{user.title}</Link>
              </h5>
              <Card.Text>{user.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted text-center">{user.createdAt}</Card.Footer>
          </Card>
          <h3 className="mb-3 mt-4">Комментарии:</h3>
        </div>
      )}
      {comments &&
        comments.map((item) => (
          <Card className="mb-4" key={item.id}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{item.name}</Card.Subtitle>
              {item.text}
            </Card.Body>
          </Card>
        ))}
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>{name}: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button className="mt-3" variant="primary" onClick={postComment}>
            Оставить комментарий
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default PostPage;

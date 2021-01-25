import React from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader.jsx';

function PostPage(props) {
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [commentsObj, setCommentsObj] = React.useState({});

  React.useEffect(() => {
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

    try {
      const apiCommentsUrl = `https://5c3755177820ff0014d92711.mockapi.io/posts/${props.match.params.number}/comments`;
      axios.get(apiCommentsUrl).then((resp) => {
        const data = resp.data;
        setCommentsObj(data[0]);
      });
    } catch {
      console.log('Comments data downloading has failed!');
    }
  }, [props.match.params.number]);

  return (
    <div className="container">
      <br />
      <br />
      <a href="/" className="">
        <Button variant="primary">Назад</Button>
      </a>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Card className="mt-4">
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
              <h5>
                <a href={`${window.location.pathname}`} className="">
                  {user.title}
                </a>
              </h5>
              <Card.Text>{user.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted text-center">{user.createdAt}</Card.Footer>
          </Card>
          <h3 className="mb-3 mt-4">Комментарии:</h3>
        </div>
      )}
      <Card className="mb-4">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            {commentsObj ? commentsObj.name : "Comments are still loading or don't exist ("}
          </Card.Subtitle>
          {commentsObj ? commentsObj.text : "Comments are still loading or don't exist ("}
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostPage;

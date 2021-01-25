import React from 'react';
import axios from 'axios';

import Navigation from '../components/Navigation';
import OneCard from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';

function FullPostPage() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [inputedValue, setInputedValue] = React.useState('');

  React.useEffect(() => {
    const apiUrl = `https://5c3755177820ff0014d92711.mockapi.io/posts${inputedValue}`;
    axios.get(apiUrl).then((resp) => {
      const allData = resp.data;
      setUsers(allData);
      setIsLoading(false);
    });
  }, [inputedValue]);

  return (
    <div className="container">
      <br />
      <br />
      <div>
        <Navigation inputedValue={inputedValue} setInputedValue={setInputedValue} />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="mt-4 card-columns">
            {users.map((user) => (
              <OneCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FullPostPage;

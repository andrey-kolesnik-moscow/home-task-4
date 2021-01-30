import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const [input, setInput] = React.useState('');

  function onClick() {
    if (props.setInputedValue) {
      props.setInputedValue('?title=' + input);
      setInput('');
    } else {
      alert('Sorry guys, please, change the request form.');
    }
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Мой блог</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to={{ pathname: '/' }} activeClassName="nav-link">
            Главная
          </NavLink>
          <NavLink to={{ pathname: '/about' }} className="nav-link">
            Обо мне
          </NavLink>
        </Nav>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          inline>
          <FormControl
            type="text"
            placeholder="Поиск статьи"
            className="mr-sm-2"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button onClick={() => onClick()} variant="primary">
            Найти
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

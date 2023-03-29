// sidebar component

// imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Sidebar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
			<Container>
				<Navbar.Brand href="/">
					<FontAwesomeIcon icon={faGear} /> Chitter
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/add">Compose Peep</Nav.Link>
						<Nav.Link href="/profile">Profile</Nav.Link>
						<Nav.Link href="/api/auth/register">Login/Register</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Sidebar;

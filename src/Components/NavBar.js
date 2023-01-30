import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};
	return (
		<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="/">
					<p className="navbar-heading">Puneet Kumar Sehrawat</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link
							href="#home"
							className={
								activeLink === "home"
									? "active navbar-link"
									: "navbar-link"
							}
							onClick={() => onUpdateActiveLink("home")}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#intro"
							className={
								activeLink === "intro"
									? "active navbar-link"
									: "navbar-link"
							}
							onClick={() => onUpdateActiveLink("intro")}
						>
							About Me
						</Nav.Link>
						<Nav.Link
							href="#experience"
							className={
								activeLink === "experience"
									? "active navbar-link"
									: "navbar-link"
							}
							onClick={() => onUpdateActiveLink("experience")}
						>
							Experience
						</Nav.Link>
						<Nav.Link
							href="#projects"
							className={
								activeLink === "projects"
									? "active navbar-link"
									: "navbar-link"
							}
							onClick={() => onUpdateActiveLink("projects")}
						>
							Projects
						</Nav.Link>
						<Nav.Link
							href="#achievement"
							className={
								activeLink === "achievement"
									? "active navbar-link"
									: "navbar-link"
							}
							onClick={() => onUpdateActiveLink("achievement")}
						>
							Achievements
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

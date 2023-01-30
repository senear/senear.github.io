import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Pulse from "react-reveal/Pulse";

import IntroImage from "../assets/dtu.jpg";

export default function Introduction() {
	return (
		<section className="intro align-items-center" id="intro">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={12} xl={5}>
						<Fade left>
							<Pulse forever duration={2000}>
								<div>
									<img
										src={IntroImage}
										alt="Delhi Technological Universty"
									/>
								</div>
							</Pulse>
						</Fade>
					</Col>
					<Col xs={12} md={12} xl={7}>
						<div className=" intro-content">
							<Fade right>
								<span className="about">About Me</span>
								<h1>
									Creative Software Developer based in New
									Delhi, India
								</h1>
								<p>
									I am a Final-year information technology
									student at{" "}
									<span>
										Delhi Technological University(Formerly
										DCE)
									</span>
									. Being a student with a{" "}
									<span>9.4 CGPA</span> and expertise in
									software engineering, database management,
									operating system and Data Structures, I have
									a strong aptitude for troubleshooting and
									finding and fixing bugs that can cause the
									code to break. As a college student, I
									gained strong hands-on coding and
									problem-solving experience as an{" "}
									<span>Information Technological Major</span>
									. I am very passionate about the opportunity
									to work on complex challenges and enjoy
									every process of development from design to
									deployment.
								</p>
								<button
									className="download-btn"
									onClick={() => {
										window.location.href =
											"https://drive.google.com/file/d/1rbHuc-EcKu6unEvS17jBvmvMGEASBn9Z/view?usp=sharing";
									}}
								>
									<span>Download Resume</span>
								</button>
							</Fade>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

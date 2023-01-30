import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import HeaderImage from "../assets/puneet.png";

import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLeetcode, SiCodechef, SiInstagram, SiGmail } from "react-icons/si";

import { Fade, Zoom } from "react-reveal";

export default function Banner() {
	return (
		<section className="banner align-items-center" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<div className="align-items-center">
							<span className="tagline">
								Welcome to my Portfolio
							</span>
							<Fade left>
								<h1>
									<span className="text-stroke">I am</span>{" "}
									Puneet Sehrawat
								</h1>
							</Fade>
							<Fade left>
								<h2>
									IT Major from Delhi Technological
									University.
								</h2>
							</Fade>
							<Fade left>
								<div className="social-icons">
									<FiLinkedin
										onClick={() => {
											window.location.href =
												"https://www.linkedin.com/in/puneet-kumar-sehrawat-4b3312197/";
										}}
									/>
									<SiLeetcode
										onClick={() => {
											window.location.href =
												"https://leetcode.com/senear/";
										}}
									/>
									<SiCodechef
										onClick={() => {
											window.location.href =
												"https://www.codechef.com/users/seneark";
										}}
									/>
									<SiInstagram
										onClick={() => {
											window.location.href =
												"https://www.instagram.com/puneet_kr_s/";
										}}
									/>
									<FiGithub
										onClick={() => {
											window.location.href =
												"https://github.com/seneark";
										}}
									/>
									<SiGmail
										onClick={() => {
											window.location.href =
												"mailto:puneetsenear@gmail.com";
										}}
									/>
								</div>
							</Fade>
						</div>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<Zoom>
							<div>
								<img src={HeaderImage} alt="Header Img" />
							</div>
						</Zoom>
					</Col>
				</Row>
			</Container>
			<div className="divider"></div>
		</section>
	);
}

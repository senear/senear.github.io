import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import HeaderImage from "../assets/puneet.png";

import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLeetcode, SiCodechef, SiInstagram, SiGmail } from "react-icons/si";

export default function Banner() {
	return (
		<section className="banner align-items-center" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility once>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeInLeft"
											: ""
									}
								>
									<div className="align-items-center">
										<span className="tagline">
											Welcome to my Portfolio
										</span>
										<h1>
											<span className="text-stroke">
												I am
											</span>{" "}
											Puneet Sehrawat
										</h1>
										<h2>
											IT Major from Delhi Technological
											University.
										</h2>
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
									</div>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__zoomIn"
											: "animate__animated animate__zoomOut"
									}
								>
									<img src={HeaderImage} alt="Header Img" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<div className="divider"></div>
		</section>
	);
}

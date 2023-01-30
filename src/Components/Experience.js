import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Bizmarvel from "../assets/bizmarvel.png";
import Microsoft from "../assets/microsoft.png";

export default function Experience() {
	return (
		<section className="experience align-items-center" id="experience">
			<TrackVisibility partialVisibility>
				{({ isVisible }) => (
					<Container
						className={
							isVisible
								? "animate__animated animate__fadeIn"
								: ""
						}
					>
						<h1>Experience</h1>
						<Row
							className="align-items-center"
							style={{
								display: "flex",
								justifyContent: "center",
								marginBottom: "5vh",
							}}
						>
							<Col xs={6} md={3} xl={3}>
								<div>
									<img src={Microsoft} alt="Microsoft Logo" />
								</div>
							</Col>
							<Col xs={12} md={9} xl={9}>
								<div className="experience-content">
									<div className="experience-flex">
										<h5>Software Developer Intern</h5>
										<h5>May 2022 - July 2022</h5>
									</div>
									<div className="experience-details">
										<ul>
											<li>
												Implemented an IaC construct for
												handling all the configuration
												of a first-party Microsoft tool.
											</li>
											<li>
												Designed a custom type system in
												azure bicep for handling
												first-party resources and
												created a provider to convert
												the JSON output to its required
												format.
											</li>
											<li>
												<span>Tech Stack:</span> C#,
												Azure Bicep, PowerShell Script,
												and some first-party tools.
											</li>
										</ul>
									</div>
								</div>
							</Col>
						</Row>
						<Row
							className="align-items-center"
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Col xs={6} md={3} xl={3}>
								<div>
									<img src={Bizmarvel} alt="Bizmarvel Logo" />
								</div>
							</Col>
							<Col xs={12} md={9} xl={9}>
								<div className="experience-content">
									<div className="experience-flex">
										<h5>Fullstack Developer Intern 1</h5>
										<h5>November 2020 - January 2021</h5>
									</div>
									<div className="experience-details">
										<ul>
											<li>
												Built a Business Management
												website where companies can find
												sponsors, and they can also make
												a post about their activities.
											</li>
											<li>
												Added features like payment
												gateway and uploading of various
												content like Audio, Images, and
												Video. Worked on both the Front
												end and the backend of the
												website and hosted it on Digital
												Ocean.
											</li>
											<li>
												<span>Tech Stack:</span> Nodejs,
												MongoDB, React JS, Stripe,
												Digital Ocean
											</li>
										</ul>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				)}
			</TrackVisibility>
		</section>
	);
}

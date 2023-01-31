import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiWizardStaff, GiSlap } from "react-icons/gi";
import {
	IoFastFoodSharp,
	IoLocationSharp,
	IoLogoPython,
} from "react-icons/io5";
import {
	SiCanva,
	SiFirebase,
	SiFlask,
	SiMongodb,
	SiNodedotjs,
	SiReact,
	SiSocketdotio,
	SiTensorflow,
} from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

import Aidway from "../assets/aidway.png";

import Zoom from "react-reveal/Zoom";

export default function Projects() {
	const [width, setWidth] = useState("0");
	const ref = useRef(null);
	useEffect(() => {
		setWidth(ref.current.offsetWidth);
		window.addEventListener("resize", () => {
			setWidth(ref.current.offsetWidth);
		});
	});
	return (
		<section className="projects align-items-center" id="projects">
			<Container style={{ zIndex: 1 }}>
				<div className="project-card-heading">
					<h1>Projects</h1>
				</div>
				<Row className="align-items-center">
					<Col xs={12} md={12} xl={6} ref={ref}>
						<Zoom>
							<div
								className="cards"
								onClick={() => {
									window.location.href =
										"https://github.com/seneark/Aid-Way";
								}}
							>
								<div className="general">
									<h1>AidWay</h1>
									<div className="project-content">
										<p className="project-date">
											September 2021
										</p>
										<p className="project-presented">
											Project was presented at Resonate
											Hackathon and came 2nd place.
										</p>
										<div>
											<span>
												<SiReact
													style={{
														color: "#0078d7",
													}}
												/>
												React Native
											</span>
											<span>
												<SiFirebase
													style={{
														color: "#FFFBAC",
													}}
												/>
												Firebase
											</span>
											<span>
												<FcGoogle />
												Maps
											</span>
											<span>
												<IoLocationSharp />
												Here API
											</span>
										</div>
									</div>
								</div>
								<div className="overlay">
									<div
										className="icon-cards"
										style={{
											minWidth: width / 4,
											maxWidth: width / 4,
										}}
									>
										<div className="level center">
											<img
												src={Aidway}
												alt="Aidway Logo"
											/>
										</div>
									</div>
									<div
										className="more-info"
										style={{
											minWidth: (4 * width) / 8,
											maxWidth: (4 * width) / 8,
										}}
									>
										<h2>Track Emergency</h2>
										<div className="coords">
											<p>
												Aidway provides an easy to use
												method for the victims to
												contact and track an emergency
												service. Vicitims can report an
												emergencyand track it real time
												using a map.
											</p>
										</div>
									</div>
								</div>
								<span className="more">
									Mouse over the cards for more info
								</span>
							</div>
						</Zoom>
					</Col>
					<Col xs={12} md={12} xl={6}>
						<Zoom>
							<div
								className="cards"
								onClick={() => {
									window.location.href =
										"https://github.com/seneark/Image-Captioning";
								}}
							>
								<div className="general">
									<h1>Desc Mage</h1>
									<div className="project-content">
										<p className="project-date">
											December 2020
										</p>
										<p className="project-presented">
											Project was built under a DTU
											Professor.
										</p>
										<div>
											<span>
												<SiFlask />
												Flask
											</span>
											<span>
												<SiReact
													style={{
														color: "#0078d7",
													}}
												/>
												ElectronJS
											</span>
											<span>
												<SiTensorflow
													style={{
														color: "#FAAB78",
													}}
												/>
												Tensorflow
											</span>
											<span>
												<IoLogoPython
													style={{
														color: "#0078d7",
													}}
												/>
												Python
											</span>
										</div>
									</div>
								</div>
								<div className="overlay">
									<div
										className="icon-cards"
										style={{
											minWidth: width / 4,
											maxWidth: width / 4,
										}}
									>
										<div className="level center">
											<GiWizardStaff />
										</div>
									</div>
									<div
										className="more-info"
										style={{
											minWidth: (4 * width) / 8,
											maxWidth: (4 * width) / 8,
										}}
									>
										<h2>Instant Captions</h2>
										<div className="coords">
											<p>
												This software quickly generates
												a description of the image
												feeded into it and also provides
												the capability to hear the
												generated description. It was
												built to help the differently
												abled people and can also be
												enhanced for real time videos.
											</p>
										</div>
									</div>
								</div>
								<span className="more">
									Mouse over the cards for more info
								</span>
							</div>
						</Zoom>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} md={12} xl={6} ref={ref}>
						<Zoom>
							<div
								className="cards"
								onClick={() => {
									window.location.href =
										"https://github.com/seneark/Face-Me";
								}}
							>
								<div className="general">
									<h1>FaceME</h1>
									<div className="project-content">
										<p className="project-date">
											July 2021
										</p>
										<p className="project-presented">
											Project exhibited at Micorosft
											Engage 2021
										</p>
										<div>
											<span>
												<SiNodedotjs
													style={{
														color: "#11999E",
													}}
												/>
												Node.JS
											</span>
											<span>
												<SiMongodb
													style={{
														color: "#3FC1C9",
													}}
												/>
												MongoDB
											</span>
											<span>
												<SiSocketdotio
													style={{
														color: "#000",
													}}
												/>
												Socket.IO
											</span>
											<span>
												<SiCanva
													style={{
														color: "#0078d7",
													}}
												/>
												Canvas
											</span>
										</div>
									</div>
								</div>
								<div className="overlay">
									<div
										className="icon-cards"
										style={{
											minWidth: width / 4,
											maxWidth: width / 4,
										}}
									>
										<div className="level center">
											<GiSlap className="face-me-icon" />
										</div>
									</div>
									<div
										className="more-info"
										style={{
											minWidth: (4 * width) / 8,
											maxWidth: (4 * width) / 8,
										}}
									>
										<h2>Meetings done right</h2>
										<div className="coords">
											<p>
												This is a peer to peer video
												conferencing website where a
												user can chats, Video call with
												the additional feature of
												Notepad where Users can
												collaborate on notes and
												whiteboard.
											</p>
										</div>
									</div>
								</div>
								<span className="more">
									Mouse over the cards for more info
								</span>
							</div>
						</Zoom>
					</Col>
					<Col xs={12} md={12} xl={6}>
						<Zoom>
							<div
								className="cards"
								onClick={() => {
									window.location.href =
										"https://github.com/seneark/Foodie-Hub";
								}}
							>
								<div className="general">
									<h1>FoodieHub</h1>
									<div className="project-content">
										<p className="project-date">
											November 2020
										</p>
										<p className="project-presented">
											Project was presented at Abhigyan
											Hackathon and came 2nd place.
										</p>
										<div>
											<span>
												<SiReact
													style={{
														color: "#0078d7",
													}}
												/>
												React Native
											</span>
											<span>
												<SiFirebase
													style={{
														color: "#FFFBAC",
													}}
												/>
												Firebase
											</span>
											<span>
												<SiReact
													style={{
														color: "#0078d7",
													}}
												/>
												React VR
											</span>
										</div>
									</div>
								</div>
								<div className="overlay">
									<div
										className="icon-cards"
										style={{
											minWidth: width / 4,
											maxWidth: width / 4,
										}}
									>
										<div className="level center">
											<IoFastFoodSharp className="janhit" />
										</div>
									</div>
									<div
										className="more-info"
										style={{
											minWidth: (4 * width) / 8,
											maxWidth: (4 * width) / 8,
										}}
									>
										<h2>For Foodies</h2>
										<div className="coords">
											<p>
												This apps is built for foodies
												and recommends Restaurants to
												them based on their mood
												and preference. Also, in this
												COVID-19 pandemic users can view
												restaurants in 360° VR views
												sitting at Home and experience
												the digital view.
											</p>
										</div>
									</div>
								</div>
								<span className="more">
									Mouse over the cards for more info
								</span>
							</div>
						</Zoom>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

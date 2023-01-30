import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { GiRoundStar } from "react-icons/gi";

import Fade from "react-reveal/Fade";

export default function Achievements() {
	return (
		<section className="achievement align-items-center" id="achievement">
			<Container>
				<Row style={{ textAlign: "center" }}>
					<Col xs={12} md={12} xl={7}>
						<Fade left>
							<h1>Achievements</h1>
							<ul className="achievement-list">
								<li>
									<span>
										<GiRoundStar />
									</span>
									<p>
										Awarded Runner Up at IOSD DevWeek
										Hackathon among 200+ teams for building
										a Society management website.
									</p>
								</li>
								<li>
									<span>
										<GiRoundStar />
									</span>
									<p>
										Awarded Runner Up at Resonate Hackathon
										among 500+ teams for building Aidway
									</p>
								</li>
								<li>
									<span>
										<GiRoundStar />
									</span>
									<p>
										Among the Top 5 Percentile in Facebook
										Hacker Cup among the 35,000 people who
										participated in it.
									</p>
								</li>
								<li>
									<span>
										<GiRoundStar />
									</span>
									<p>
										Among the top 2.5% coders on Leetcode
										globally.
									</p>
								</li>
								<li>
									<span>
										<GiRoundStar />
									</span>
									<p>
										Authored a Conference paper(IEEE) titled
										“Comparative Analysis of Time Series
										Models on COVID-19 Predictions”, which
										aimed at approximating future covid
										cases with an accuracy of 98%.
									</p>
								</li>
								<li>
									<span>
										<GiRoundStar />
									</span>
									<p>
										Indian Army SSB recommended where around
										450 students are recommended from over
										300k students.
									</p>
								</li>
							</ul>
						</Fade>
					</Col>

					<Col xs={12} md={12} xl={5}>
						<Fade right>
							<h1>Skills</h1>
							<div className="skills">
								<div className="skill-bar">
									<div className="bar-label">
										<p>Python</p>
										<h6>93%</h6>
									</div>
									<ProgressBar now={"93"} />
								</div>

								<div className="skill-bar">
									<div className="bar-label">
										<p>JavaScript</p>
										<h6>83%</h6>
									</div>
									<ProgressBar now={"83"} />
								</div>

								<div className="skill-bar">
									<div className="bar-label">
										<p>C++</p>
										<h6>95%</h6>
									</div>
									<ProgressBar now={"95"} />
								</div>

								<div className="skill-bar">
									<div className="bar-label">
										<p>Machine Learning/Deep Learning</p>
										<h6>89%</h6>
									</div>
									<ProgressBar now={"89"} />
								</div>

								<div className="skill-bar">
									<div className="bar-label">
										<p>MySQL/MongoDB</p>
										<h6>85%</h6>
									</div>
									<ProgressBar now={"85"} />
								</div>

								<div className="skill-bar">
									<div className="bar-label">
										<p>React</p>
										<h6>97%</h6>
									</div>
									<ProgressBar now={"97"} />
								</div>

								<div className="skill-bar">
									<div className="bar-label">
										<p>React Native</p>
										<h6>97%</h6>
									</div>
									<ProgressBar now={"97"} />
								</div>

								<div className="skill-bar">
									<div className="bar-label">
										<p>Node.JS</p>
										<h6>91%</h6>
									</div>
									<ProgressBar now={"91"} />
								</div>

								<div className="skill-bar">
									<div className="bar-label">
										<p>Flask</p>
										<h6>80%</h6>
									</div>
									<ProgressBar now={"80"} />
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	background: #2b2b2b;
	height: 70vh;
`;

const Row = styled.div`
	display: flex;
	color: white;
	width: 95%;
	max-width: 1020px;
	margin: 0 auto;
`;

const MyPic = styled.img`
	width: 100px;
	height: 120px;
	border-radius: 100%;
	margin-top: 2.3733333333rem;
`;

const Hero = styled.div`
	width: 25%;
	text-align: center;
`;

const MainAbout = styled.div`
	width: 75%;
	p {
		font-size: large;
		line-height: 30px;
		color: #7a7a7a;
	}
`;

const H2 = styled.h2`
	font: 22px/30px 'opensans-bold', sans-serif;
	margin-bottom: 12px;
`;

const About = props => {
	let resumeData = props.resumeData;

	return (
		<React.Fragment>
			<Section id="about">
				<Row>
					<Hero>
						<MyPic
							className="profile-pic"
							src="images/profilepic.png"
							alt="my pic"
						/>
					</Hero>
					<MainAbout>
						<H2>About Me</H2>
						<p>
							{' '}
							I am a recent graduate from{' '}
							<a
								href="https://coderacademy.edu.au/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Coder Academy fastrack bootcamp
							</a>
							. I am also a process engineer that loves challenges and learning.
							I am an inquisitive thinker, constantly looking for solutions to
							daily problems. I was an Operations Manager for the last 15 years,
							role that gave me the skills to lead teams and also solidified my
							understanding of team cohesion.
						</p>
						<div className="main-details">
							<div className="contact-details">
								<H2>Contact Details</H2>
								<p className="address">
									<span>{resumeData.name}</span>
									<br />
									<span>
										{resumeData.address}
										<br />
										{resumeData.suburbstate}
									</span>
									<br />
									<span>mob: {resumeData.mobile}</span>
									<br />
									<span>email: {resumeData.email}</span>
								</p>
							</div>
						</div>
					</MainAbout>
				</Row>
			</Section>
		</React.Fragment>
	);
};

export default About;

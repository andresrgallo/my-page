import React from 'react';
import styled from 'styled-components';

const About = props => {
	let resumeData = props.resumeData;
	const Row = styled.div`
		display: flex;
	`;

	return (
		<React.Fragment>
			<section id="about">
				<Row>
					<div className="hero">
						<img
							className="profile-pic"
							src="images/profilepic.png"
							alt="my pic"
						/>
					</div>
					<div className="main-about">
						<h2>About Me</h2>
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
								<h2>Contact Details</h2>
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
					</div>
				</Row>
			</section>
		</React.Fragment>
	);
};

export default About;

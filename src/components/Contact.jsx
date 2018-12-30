import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
	background: #191919;
	@media (max-width: 600px) {
		padding-top: 20px;
	}
`;

const H1 = styled.h1`
	font: 28px 'opensans bold', sans-serif;
	letter-spacing: 1px;
	text-align: center;
	margin-bottom: 60px;
	color: white;
	font-weight: 300;
	@media (max-width: 600px) {
		font-size: 18px;
		margin-bottom: 0px;
	}
`;

const ContactText = styled.div`
	display: flex;
	padding-bottom: 120px;
	svg {
		font-size: 80px;
		margin: 0 40px;
		color: white;
		-webkit-transition: all 1s ease;
		-moz-transition: all 1s ease;
		-o-transition: all 1s ease;
		&:hover {
			-webkit-transform: scale(1.3);
			-ms-transform: scale(1.3);
			transform: scale(1.3);
			color: orange;
		}
	}
	@media (max-width: 600px) {
		svg {
			font-size: 30px;
			margin: 0 20px;
		}
		padding-bottom: 30px;
	}
`;

const P = styled.p`
	font: 16px/24px 'Montserrat', sans-serif;
	color: #6e7881;
	margin-bottom: 18px;
	margin-top: 9px;
	@media (max-width: 600px) {
		font-size: 12px;
	}
`;

const Contact = props => {
	let resumeData = props.resumeData;
	return (
		<React.Fragment>
			<ContactSection id="contact">
				<H1>
					<span>Get In Touch.</span>
				</H1>
				<ContactText className="the-row">
					<i className="fas fa-envelope" />
					<div>
						<P>
							Please do not hesitate in sending me a message at{' '}
							{resumeData.email}, I would like to hear from you.
						</P>
					</div>
				</ContactText>
			</ContactSection>
		</React.Fragment>
	);
};

export default Contact;

import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
	background: #191919;
`;

const H1 = styled.h1`
	font: 28px 'opensans bold', sans-serif;
	letter-spacing: 1px;
	text-align: center;
	margin-bottom: 60px;
	color: white;
	font-weight: 300;
`;

const ContactText = styled.div`
	display: flex;
	padding-bottom: 120px;
	svg {
		font-size: 80px;
		margin: 0 40px;
		color: white;
		&:hover {
			-webkit-transform: scale(1.3);
			-ms-transform: scale(1.3);
			transform: scale(1.3);
			color: orange;
		}
	}
`;

const P = styled.p`
	font: 16px/24px 'Montserrat', sans-serif;
	color: #6e7881;
	margin-bottom: 18px;
	margin-top: 9px;
`;

const Contact = props => {
	let resumeData = props.resumeData;
	return (
		<React.Fragment>
			<ContactSection id="contact">
				<H1>
					<span>Get In Touch.</span>
				</H1>
				<ContactText className="row">
					<i class="fas fa-envelope" />
					<div className="two columns header-col" />
					<div className="ten columns">
						<P className="lead">
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

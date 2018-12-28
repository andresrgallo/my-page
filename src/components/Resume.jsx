import React from 'react';
import styled from 'styled-components';

const Education = styled.div`
	display: flex;
	margin-bottom: 48px;
	padding-bottom: 24px;
	border-bottom: 1px solid #e8e8e8;
`;

const Work = styled.div`
	display: flex;
	margin-bottom: 48px;
	padding-bottom: 24px;
	border-bottom: 1px solid #e8e8e8;
`;

const Icon = styled.img`
	margin: 40px;
	width: auto;
	height: 100px;
	-webkit-transition: all 1s ease;
	-moz-transition: all 1s ease;
	-o-transition: all 1s ease;
	&:hover {
		:hover {
			height: 80px;
			width: 100px;
			margin: 30px;
		}
	}
`;

const Skills = styled.div`
	display: flex;
`;

const Ul = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const H1 = styled.h1`
	font: 24px 'opensans bold', sans-serif;
	text-transform: uppercase;
	letter-spacing: 1px;
	span {
		border-bottom: 3px solid #11abb0;
		padding-bottom: 6px;
	}
`;

const HeaderCol = styled.div`
	width: 20%;
`;

const DetailsCol = styled.div`
	width: 80%;
`;

const ItemDetail = styled.div`
	h3 {
		font: 25px 'opensans-bold', sans-serif;
	}
	p {
		font: 16px/24px 'Montserrat', sans-serif;
		color: #6e7881;
		margin-bottom: 18px;
		margin-top: 9px;
	}
`;

const Resume = () => {
	return (
		<React.Fragment>
			<section id="resume">
				{/* Education
      ----------------------------------------------- */}
				<Education className="row">
					<HeaderCol>
						<H1>
							<span>Education</span>
						</H1>
					</HeaderCol>
					<DetailsCol>
						<ItemDetail>
							<h3>Coder Academy</h3>
							<p>
								<em>Diploma of Information Technology - Coding Bootcamp</em>
								&nbsp; February 2018
							</p>
						</ItemDetail>
						<ItemDetail>
							<h3>Sydney Institute of ERP</h3>
							<p className="info">
								<em>SAP Process Integration TERP course</em>&nbsp; February 2012
							</p>
						</ItemDetail>
						<ItemDetail>
							<h3>University of Sydney</h3>
							<p>
								<em>Master degree of Commerce</em>&nbsp; February 2001
							</p>
						</ItemDetail>
						<ItemDetail>
							<h3>Pontificia Universidad Javeriana</h3>
							<p>
								<em>Degree of Process Engineering </em>
								February 1993
							</p>
						</ItemDetail>
					</DetailsCol>
				</Education>
				{/* End Education */}
				{/* Work
      ----------------------------------------------- */}
				<Work className="row">
					<HeaderCol>
						<H1>
							<span>Work</span>
						</H1>
					</HeaderCol>
					<DetailsCol>
						<ItemDetail>
							<h3>JobReady</h3>
							<p className="info">
								<em>Junior Developer Intern </em>August 2018
							</p>
							<p>
								Helped built a Ruby Gem to accept data from databases, csv or
								json files and 'anonymize' the data, keeping its original form
								and shape.
							</p>
						</ItemDetail>
					</DetailsCol>
				</Work>
				{/* End Work */}
				{/* Skills
      ----------------------------------------------- */}
				<Skills className="row">
					<HeaderCol>
						<H1>
							<span>Skills</span>
						</H1>
					</HeaderCol>
					<DetailsCol>
						<div className="main-skills">
							<Ul>
								<li className="js--wp-2">
									<Icon src="icons/html1.png" alt="HTML Icon" />
								</li>
								<li>
									<Icon src="icons/css.png" alt="CSS Icon" />
								</li>
								<li>
									<Icon src="icons/ruby.png" alt="Ruby on Rails Icon" />
								</li>
								<li>
									<Icon
										src="icons/if_Ruby_on_Rails_2_282804.png"
										alt="Ruby on Rails Icon"
									/>
								</li>
								<li>
									<Icon src="icons/js.png" alt="Javascript Icon" />
								</li>
								<li>
									<Icon src="icons/nodejs.png" alt="Nodejs Icon" />
								</li>
								<li>
									<Icon src="icons/react.png" alt="React Icon" />
								</li>
							</Ul>
						</div>
					</DetailsCol>
				</Skills>
			</section>
		</React.Fragment>
	);
};

export default Resume;

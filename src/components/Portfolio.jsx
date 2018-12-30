import React from 'react';
import { Button, Modal } from 'react-materialize';
import styled from 'styled-components';

const PortfolioSection = styled.section`
	background: #ebeeee;
`;

const Works = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export const H1 = styled.h1`
	font: 28px 'opensans bold', sans-serif;
	letter-spacing: 1px;
	text-align: center;
	margin-bottom: 90px;
	color: #000000c7;
	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

const Card = styled.div`
	height: 280px;
	width: 310px;
`;

const Img = styled.img`
	height: 280px;
	box-shadow: 0 2px 2px #949090;
	border-radius: 5%;
	width: 310px;
	&:hover {
		opacity: 0.1;
		z-index: -1;
	}
`;

const InImg = styled.img`
	margin: 0 auto;
	height: 210px;
	width: 400px;
	padding-bottom: 20px;
	@media (max-width: 1200px) {
		width: 350px;
	}
	@media (max-width: 768px) {
		width: 300px;
	}
	@media (max-width: 600px) {
		width: 250px;
	}
`;

const Center = styled.div`
	text-align: center;
`;

const Link = styled.a`
	color: #343434;
	letter-spacing: 0.5px;
	font-size: 16px;
	font-weight: 700;
	padding-right: 10px;
`;

const P = styled.p`
	font: 14px/24px 'Monserrat', sans-serif;
	color: #292525d6;
	margin-bottom: 20px;
	@media (max-width: 600px) {
		font-size: 10px;
	}
`;

const H4 = styled.h4`
	font: 16px/24px 'Montserrat-bold', sans-serif;
	margin-bottom: 12px;
	color: #111;
	font-weight: 900;
`;

const Overlay = styled.div`
	position: relative;
	bottom: 318px;
	height: 280px;
	left: 0px;
	z-index: 1;
	border-radius: 5%;
	p,
	h5, svg {
    visibility: hidden;
		z-index: 1;
	}
	h5 {
    color: white;
		font: 16px/24px 'Monserrat', sans-serif;
    padding: 10px 0 0 10px;
    margin-top: 25px;
    text-align: left
    font-weight: 900
	}
	p {
    font: 14px/24px 'Monserrat', sans-serif;
		margin: 0
    text-align: left
    padding: 0 0 20px 10px
    font-weight: 100
    color: white;
  }
  &:hover {
		background: #808080b8;
	}
	&:hover p,
  &:hover h5,
  &:hover svg {
    z-index: 1;
		visibility: visible;
		//background: #80808059;
	}
`;

const Portfolio = () => {
	return (
		<PortfolioSection id="portfolio">
			<div className="the-row">
				<H1>Check Out Some Of My Works</H1>
				<Works>
					<Modal
						trigger={
							<Button>
								<Card>
									<Img alt="course app" src="images/portfolio/course-app.png" />
									<Overlay className="overlay">
										<div>
											<h5>Ruby Course Application</h5>
											<p>Ruby Coding Basics</p>
										</div>
										<i
											className="fas fa-search-plus"
											style={{ color: 'white' }}
										/>
									</Overlay>
								</Card>
							</Button>
						}
					>
						<div>
							<Center>
								<InImg src="images/portfolio/modals/m-ruby.png" alt="ruby" />
							</Center>
							<div>
								<H4>Ruby Course App</H4>
								<P>
									Concept, built and designed a 'course cost' app, that enables
									students to estimate costs of undertaking one or more courses
									within a specific period of time. The app displays courses
									classified by skill sets with extra information regarding
									commencing and ending dates. It can be tailored to any
									education institution.
								</P>
							</div>
							<div>
								<Link
									href="https://github.com/andresrgallo/course-app"
									target="_blank"
									rel="noopener noreferrer"
								>
									GITHUB
								</Link>
							</div>
						</div>
					</Modal>
					<Modal
						trigger={
							<Button>
								<Card>
									<Img
										alt="teach-me app"
										src="images/portfolio/teachme-app.png"
									/>
									<Overlay className="overlay">
										<h5>Rails Teachme Web App</h5>
										<p>Ruby-on-Rails Devise Sendgrid Stripe Postgresql</p>
										<i
											className="fas fa-search-plus"
											style={{ color: 'white' }}
										/>
									</Overlay>
								</Card>
							</Button>
						}
					>
						<div>
							<Center>
								<InImg
									src="images/portfolio/modals/m-teachapp.jpg"
									alt="teach-me app"
								/>
							</Center>
							<div>
								<H4>Rails Teach-me App</H4>
								<P>
									Concept, built and designed an online Tutor/student app where
									upskill people can share their skills and get remunerated and
									students can learn about any skill they want to get or
									improve.
								</P>
							</div>
							<div>
								<Link
									href="https://github.com/andresrgallo/teach-me-app"
									target="_blank"
									rel="noopener noreferrer"
								>
									GITHUB
								</Link>
								<Link
									href="https://teachme-app.herokuapp.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									WEBSITE
								</Link>
							</div>
						</div>
					</Modal>
					<Modal
						trigger={
							<Button>
								<Card>
									<Img
										alt="food forum app"
										src="images/portfolio/food-forum.png"
									/>
									<Overlay className="overlay">
										<h5>MERN Food Forum Web App</h5>
										<p>Nodejs Express Mongodb React</p>
										<i
											className="fas fa-search-plus"
											style={{ color: 'white' }}
										/>
									</Overlay>
								</Card>
							</Button>
						}
					>
						<div>
							<Center>
								<InImg
									src="images/portfolio/modals/food-forum.png"
									alt="foodforum"
								/>
							</Center>
							<div>
								<H4>MERN Food Forum Web App</H4>
								<P>
									Concept, built and designed a Web App for a fresh produce
									wholesaler operating out of Canberra, ACT. The goal for this
									project was to create a digital sales channel for Food Forum,
									so their customers are able to place orders online. The front
									end of the web app was built using REACT, while the backend
									was built with Node.js.
								</P>
							</div>
							<div>
								<Link
									href="https://foodforumco.netlify.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									WEBSITE
								</Link>
							</div>
						</div>
					</Modal>
					<Modal
						trigger={
							<Button>
								<Card>
									<Img
										alt="Unique RealEstate app"
										src="images/portfolio/unique-re.png"
									/>
									<Overlay className="overlay">
										<h5>Unique RealEstate App</h5>
										<p>Nodejs Express React</p>
										<i
											className="fas fa-search-plus"
											style={{ color: 'white' }}
										/>
									</Overlay>
								</Card>
							</Button>
						}
					>
						<div>
							<Center>
								<InImg
									src="images/portfolio/modals/unique-re.png"
									alt="Unique Realestate"
								/>
							</Center>
							<div>
								<H4>Unique Real Estate App</H4>
								<P>
									Application that generates a list of Tenants for a
									'non-existant' Real Estate Agency with a payments ledger for
									each Tenant. To generate the data, an API was built using
									Nodejs. With the use of vanilla javascript, random rent,
									frequency periods, rent amount and dates, are produced and
									accessed by the front end. The front end was built using REACT
									library. Front and back end were tested using Jest and enzyme
									libraries.
								</P>
							</div>
							<div>
								<Link
									href="https://github.com/andresrgallo/unique-app"
									target="_blank"
									rel="noopener noreferrer"
								>
									GITHUB
								</Link>
								<Link
									href="https://unique-realestate.netlify.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									WEBSITE
								</Link>
							</div>
						</div>
					</Modal>
				</Works>
			</div>
		</PortfolioSection>
	);
};

export default Portfolio;

import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

import img from './images/header-background.jpeg';

const TheHeader = styled.header`
	min-height: 500px;
	width: 100%;
	height: 100vh;
	color: white;
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url(${img}) no-repeat top center;
	background-size: cover !important;
	-webkit-background-size: cover !important;
	text-align: center;
	overflow: hidden;
	.invisible {
		visibility: hidden;
	}
	.opaque {
		background-color: #333333a8;
		animation: fade 0.1s;
		-moz-animation: fade 0.1s; /* Firefox */
		-webkit-animation: fade 0.1s; /* Safari and Chrome */
		-o-animation: fade 0.1s; /* Opera */
	}
	@keyframes fade {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@-moz-keyframes fade {
		/* Firefox */
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@-webkit-keyframes fade {
		/* Safari and Chrome */
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@-o-keyframes fade {
		/* Opera */
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`;

const H1 = styled.h1`
	font: 50px/1.1em 'opensans-bold', sans-serif;
	color: #fff;
	letter-spacing: -2px;
	margin: 0 auto 18px auto;
	font-weight: 200;
	padding: 130px 0 30px 0;
`;

const H3 = styled.h3`
  font: 25px/1.9em 'Roboto', sans-serif;
  color: #a8a8a8;
	margin: 0 auto;
	font-weight: 200;
  padding-bottom: 30px
  width: 50%;
  span {
    color: white;
  }
`;

const Hr = styled.hr`
	width: 60%;
	margin: 18px auto 24px auto;
	border-color: #2f2d2e;
	border-color: rgba(150, 150, 150, 0.1);
`;

export const SocialIcons = styled.ul`
	margin: 24px 0;
	padding: 0 0 120px 0;
	font-size: 30px;
	li {
		display: inline-block;
		margin: 0 15px;
		padding: 0;
		& a:hover {
			color: #0077b5;
		}
		&:nth-of-type(3) a:hover {
			color: black;
		}
		a {
			color: white;
		}
	}
`;

export const Chevron = styled.a`
	color: white;
	svg {
		font-size: 30px;
		&:hover {
			color: #11abb0;
		}
	}
`;

const Header = props => {
	//Navbar onScroll fade

	window.onscroll = function() {
		var h = document.getElementById('header').clientHeight;
		var y = window.scrollY;
		var nav = document.getElementById('navbar');

		if (y > h * 0.2 && y < h && window.outerWidth > 768) {
			nav.classList.add('invisible');
			nav.classList.remove('opaque');
		} else {
			if (y < h * 0.2) {
				nav.classList.remove('opaque', 'invisible');
			} else {
				nav.classList.remove('invisible');
				nav.classList.add('opaque');
			}
		}
	};
	return (
		<TheHeader id="header">
			<NavBar />
			<H1>I am {props.resumeData.name}</H1>
			<H3>
				I am a <span>{props.resumeData.role}</span>. I'm very
				<span> passionate</span> about <span>learning, </span>
				<span>very creative</span> and a proven <span>achiever</span>.&nbsp;
				Let's&nbsp;
				<a className="smoothscroll" href="#about">
					start scrolling{' '}
				</a>
				and learn more <a href="#about">about me</a>.
			</H3>
			<Hr />
			<SocialIcons>
				<li>
					<a
						href="https://www.facebook.com/andres.r.gallo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className=" fab fa-facebook-f" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/andres-rodriguez-9a2bab15b/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin-in" />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/andresrgallo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-github" />
					</a>
				</li>
			</SocialIcons>
			<Chevron href="#about">
				<i className="fas fa-chevron-circle-down" />
			</Chevron>
		</TheHeader>
	);
};

export default Header;
